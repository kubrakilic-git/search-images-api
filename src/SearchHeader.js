import { useState } from "react";
function SearchHeader({onSearch}) {
    /*app.js deki props olan onSearch burada aldık */
    /*formu tetikleme methodu*/
    /*usestate ile bir değişken tanımlayalım*/
    const [value, setValue] = useState('');
    //başlangıçta buradaki boş değer input valuesina verildi daha sonra 
    //setValue ile değişkeni update edeceğiz
    const searchFormSubmit = (event) =>{
      event.preventDefault(); //formun default olarak yenilenmesini engeller
      onSearch(value);
    }

    const valueChange = (event) =>{
      //inputa girilen değeri alalım
      setValue(event.target.value);
    }
    return (
      <div>
        <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
            Ne Arıyorsunuz?
            </p>
            <form onSubmit={searchFormSubmit}>
            <input class="input is-primary" value={value} onChange={valueChange} type="text" placeholder="Arama Yapacağınız Kelimeyi Giriniz"/>
          </form>
        </div>
        </section>
   
      </div>
    );
  }
  
  export default SearchHeader;
  