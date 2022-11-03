let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7
  }
];

let filterData = [];

//DOM
const ticketName = document.querySelector('#ticketName');
const ticketImgUrl = document.querySelector('#ticketImgUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');

const cardGroup = document.querySelector('.card-group');
const addBtn = document.querySelector('.addTicket-btn');
const searchResult = document.querySelector('.search-result');
const filterRegion = document.querySelector('#filterRegion');

function render(data){
  let str = "";
  let formatPrice = 0;
  searchResult.textContent = `本次搜尋共 ${data.length} 筆資料`;
  data.forEach((i) => {
    formatPrice = i.price.toLocaleString();
    str+=`
    <li class="card">
      <div class="por">
        <a href="#" class="card-img">              
          <img src="${i.imgUrl}" alt="行程圖片">
        </a>
        <div class="region">${i.area}</div>
        <div class="rank">${i.rate}</div>
      </div>
      <div class="card-content">
        <div>
          <h2 class="title"><a href="#">${i.name}</a></h2>
          <p class="content">${i.description}</p>
        </div>            
        <div class="status">
          <div class="d-flex ai-center">
            <i class="fas fa-exclamation-circle"></i>
            <p class="nums">剩下最後 ${i.group} 組</p>
          </div>
          <div class="d-flex ai-center">
            <p class="unit">TWD</p>
            <p class="price">$${formatPrice}</p>
          </div>
        </div>
      </div>
    </li>
    `
  })
  cardGroup.innerHTML = str;
}

function addTicket(){
  let obj = {};
  if(ticketName.value == "" || ticketName.value == "" ||ticketRegion.value == "" || ticketPrice.value =="" || ticketNum.value =="" || ticketRate.value =="" || ticketDescription.value ==""){
    alert("所有欄位都必須填寫，請檢查後再次送出")
  }else if(ticketRate.value <0 || ticketRate.value >10){
    alert("星級區間為 1~10，請檢查後再次送出")
  }else{
    let formatPrice = parseInt(ticketPrice.value).toLocaleString();
    obj = {
      id: data.length,
      name: ticketName.value,
      imgUrl: ticketImgUrl.value,
      area: ticketRegion.value,
      description: ticketDescription.value,
      group: ticketNum.value,
      price: formatPrice,
      rate: ticketRate.value
    }
    data.push(obj);
    ticketName.value = "";
    ticketImgUrl.value = "";
    ticketRegion.value = "";
    ticketDescription.value = "";
    ticketNum.value = "";
    ticketPrice.value = "";
    ticketRate.value = "";
    alert('成功新增資料!')
  }  
  render(data);
}

function filter(e){
  if(e.target.value == "全部地區"){
    render(data);
    return;
  }
  filterData = data.filter((i) => i.area == e.target.value);
  render(filterData);
  searchResult.textContent = `本次搜尋共 ${filterData.length} 筆資料`;
}

function init(){
  render(data);
  // 監聽
  addBtn.addEventListener('click',() => {
    addTicket();
  })
  filterRegion.addEventListener('change',function(e){
    filter(e);
  })
}

init();