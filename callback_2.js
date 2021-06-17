//=========================================

var s=window.document.createElement('script');s.src='callback.js';window.document.head.appendChild(s);
var cap = '03AGdBq27Oa_ZM9mWZfp28Uf0mfM5MucHUVhjtwRfadJZEjV5QA5_ch9tjEeYDcdDt8_GOELZPPFHgCE8NTVwrfeX4AFDDfEt4Gb6PB9xmHC01DC9R_6lQBFoggyEcOhkPbbZMpkdRdhGPe41Zuv0tLBmmydoxP3HAKOqguq0uAeOzv0xEfx73btgwd0bYr8zyjOFMnLwH4O5gVRezBDoAC94XANJBqTLn9L3Enh9d-PlV5CswYrUcn-897gnmkOTDre37xEC8Sy3Otc0AM9p_v-rBXUyUeKVrf8TCrPeYpHOmFoItlp8swJni79RJujbsH7BsNcF8IyOrGfW9-op7zEJW_e_kmQsIHh9EulKc0bo2mcLm5_SR2OkbMZqA_71y4rfdRRuIEDNe0f-5S-EPnLF1-OfTYhqBzHBY0M0gCJxAK9r1JyFDpUo_7dFYo0iZ8yrW0a6wDJABPp8MvF8ktA4jAi9CTN4KurMt0FFXVWXng9bd6ghHdJqao5T4og5VN1vDz8v1iXjAjzGTrO70lOQWgNp7_LRgNw';
const client = ___grecaptcha_cfg.clients[0]
const keys = Object.keys(client)
const requiredKey = keys.find(key => client[key].constructor.name === 'VK');
const requiredObj = client[requiredKey];
const callbackObjKey = Object.keys(requiredObj).find(key => requiredObj[key].callback);
requiredObj[callbackObjKey].callback('${cap}')

//=========================================

var cap = '03AGdBq27Oa_ZM9mWZfp28Uf0mfM5MucHUVhjtwRfadJZEjV5QA5_ch9tjEeYDcdDt8_GOELZPPFHgCE8NTVwrfeX4AFDDfEt4Gb6PB9xmHC01DC9R_6lQBFoggyEcOhkPbbZMpkdRdhGPe41Zuv0tLBmmydoxP3HAKOqguq0uAeOzv0xEfx73btgwd0bYr8zyjOFMnLwH4O5gVRezBDoAC94XANJBqTLn9L3Enh9d-PlV5CswYrUcn-897gnmkOTDre37xEC8Sy3Otc0AM9p_v-rBXUyUeKVrf8TCrPeYpHOmFoItlp8swJni79RJujbsH7BsNcF8IyOrGfW9-op7zEJW_e_kmQsIHh9EulKc0bo2mcLm5_SR2OkbMZqA_71y4rfdRRuIEDNe0f-5S-EPnLF1-OfTYhqBzHBY0M0gCJxAK9r1JyFDpUo_7dFYo0iZ8yrW0a6wDJABPp8MvF8ktA4jAi9CTN4KurMt0FFXVWXng9bd6ghHdJqao5T4og5VN1vDz8v1iXjAjzGTrO70lOQWgNp7_LRgNw';
const reduceObjectToArray = (obj) => Object.keys(obj).reduce(function (r, k) {
        return r.concat(k, obj[k]);
}, []);

const client = ___grecaptcha_cfg.clients[0]
let result = [];
result = reduceObjectToArray(client).filter(c => Object.prototype.toString.call(c) === '[object Object]')

result = result.flatMap(r => {
    return reduceObjectToArray(r)
})

result = result.filter(c => Object.prototype.toString.call(c) === '[object Object]')
const reqObj = result.find( r => r.callback)
reqObj.callback('${cap}')