import React, { useState } from "react";

interface BynarySearchProps{
  onBynarySearch: (result: boolean, position: number) => void;
}

const BinarySearchForm: React.FC<BynarySearchProps> = ({onBynarySearch}: BynarySearchProps) => {

  //Funcion de busqueda binaria
  const BynarySearch = (value: any, list: any) => {
    value = value.trim();
    list = list.trim()
    .split(/\s+/)
    .sort((a: any, b: any) => a.localeCompare(b, 'es', { sensitivity: 'base' }));;
    let first = 0;
    let last = list.length - 1;
    let exists = false;

    while (first <= last) {
      let middle = Math.floor((first + last) / 2);
      let cmp = list[middle].localeCompare(value, 'es', { sensitivity: 'base' });

      if (cmp === 0) {
        exists = true;
        break;
      } else if (cmp > 0) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }

    return exists;
  }

  const FindPosition = (value: any, list: any) => {
    let position = 0;
    let newList = list.trim()
    .split(/\s+/);

    console.log(newList);
    
    for(let i = 0; i < newList.length; i++){
      if(newList[i] === value){
        position = i+1;
        break;
      }
    }
    return position;
  }

  //Funcion para hallar la posicion del texto

  const [form, setForm] = useState({
    txt_textArea: "",
    txt_searchWord: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = BynarySearch(form.txt_searchWord, form.txt_textArea);
    const position = FindPosition(form.txt_searchWord, form.txt_textArea);

    onBynarySearch(result, position);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm((prev) => ({
    ...prev,
    [id]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ingrese un párrafo:</label>
      <textarea
        id="txt_textArea"
        rows={10}
        onChange={handleChange}
        value={form.txt_textArea}

      />
      <label>Ingrese una palabra a buscar en el párrafo ingresado:</label>
      <input
        type="text"
        id="txt_searchWord"
        onChange={handleChange}
        value={form.txt_searchWord}
        />

      <button id="btn_generate" type="submit">Generar</button>
    </form>
  );
}

export default BinarySearchForm;