const prepentDiv = document.getElementById('parent_id');
 fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then(data => displayProduct(data))


const displayProduct = (data) => {
    for(const product of data){
        const div = document.createElement("div");
        div.className="col";
        div.innerHTML = `
        <div class="card shadow py-3">
        <img src=${product.image} class="card-img-top w-75 d-flex mx-auto img_height" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description.slice(0,70)}</p>
          <button class="btn btn-primary" onClick="handleDetails('${product.id}')">See Details</button>
        </div>

        `;
        prepentDiv.append(div);
    }
};

const handleDetails = (id) => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        const details = data.find((d) => d.id == id);
      const div = document.createElement('div');
      div.className = "col";
      prepentDiv.innerHTML = '';
      div.innerHTML = `
      <div class="card shadow py-3">
        <img src=${details.image} class="card-img-top w-75 d-flex mx-auto img_height" alt="...">
        <div class="card-body">
          <h5 class="card-title">${details.title}</h5>
          <p class="card-text">${details.description}</p>
          <p class="card-text">Price: $${details.price}</p>

        </div>
      `;
      
      prepentDiv.append(div);
      
    });
};



const serchValue = () => {
    const inputFild = document.getElementById('input_fild');
    const inputValue = inputFild.value;
    fetch(`https://fakestoreapi.com/products/category/${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
        prepentDiv.innerHTML = '';
        for(const datas of data){
            const div = document.createElement('div');
            div.className = 'col';
            div.innerHTML = `
            <div class="card shadow py-3">
            <img src=${datas.image} class="card-img-top w-75 d-flex mx-auto img_height" alt="...">
            <div class="card-body">
              <h5 class="card-title">${datas.title}</h5>
              <p class="card-text">${datas.description.slice(0,70)}</p>
            </div>
            <button class="btn btn-primary w-25 ms-2" onClick="handleDetails('${datas.id}')">See Details</button>


            `;
            prepentDiv.append(div);

        }
    });
};




