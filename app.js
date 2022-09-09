let mobiles = {
    iphone: {
        v14: {
            ram: 1,
            rom: 3,
            price: 4665,
            isApproved: true,
            Category: "A",
        },
        v13: {
            ram: 2,
            rom: 3,
            price: 464665,
            isApproved: true,
            Category: "A",
        },
        v15: {
            ram: 3,
            rom: 3,
            price: 464665,
            isApproved: true,
            Category: "A",
        },
    },
    samsung: {
        s14: {
            ram: 4,
            rom: 3,
            price: 464665,
            isApproved: true,
            Category: "A",
        },
        s13: {
            ram: 5,
            rom: 3,
            price: 464665,
            isApproved: true,
            Category: "A",
        },
        s15: {
            ram: 6,
            rom: 3,
            price: 464665,
            isApproved: true,
            Category: "A",
    },
  },
  xiomi: {
    x14: {
        ram: 7,
        rom: 3,
        price: 464665,
        isApproved: true,
        Category: "E",
    },
    x13: {
      ram: 8,
      rom: 3,
      price: 464665,
      isApproved: true,
      Category: "E",
    },
    x15: {
        ram: 9,
        rom: 3,
        price: 464665,
        isApproved: false,
        Category: "E",
    },
},
infinix: {
    hot14: {
        ram: 10,
        rom: 3,
        price: 464665,
        isApproved: false,
        Category: "E",
    },
    hot13: {
        ram: 11,
        rom: 3,
        price: 464665,
        isApproved: true,
        Category: "E",
    },
    hot15: {
        ram: 12,
        rom: 3,
        price: 464665,
        isApproved: true,
        Category: "E",
    },
},
};

let Mobile_Brand = document.getElementById("Mobile_Brand");
let Mobile_Model = document.getElementById("Mobile_Model");
let specs = document.getElementById("specs");

    let parent = Object.keys(mobiles);
    letsDisplayItem(parent, "Mobile_Brand");
function letsDisplayItem(parentData, idBrand) {
  let myvariable = "";
  console.log(parentData);
  parentData.filter((parentData) => {
    myvariable += `<option value="${parentData}">${parentData}</option>`;
  });
  document.getElementById(idBrand).innerHTML = myvariable;
}

function functionGotChanged() {
  let hello = Object.keys(mobiles[Mobile_Brand.value]);
  console.log(hello);
  letsDisplayItem(hello, "Mobile_Model");
}



function childItem() {
    let displayItemString = "";
    
        Object.entries(mobiles[Mobile_Brand.value][Mobile_Model.value]).forEach(
          ([key, value]) => {
            displayItemString += `<p> ${key}: ${value} </p>`;
          }
        );

    
    document.getElementById("specs").innerHTML = displayItemString;
}