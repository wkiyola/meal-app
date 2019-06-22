'use strict';
const assert = require('assert');
// const sum = arr => arr.reduce((acc,val)=>acc + val, 0);
const getPost = (fetch,id) => {
    return fetch('https://randomuser.me/api/'+id);
}


if(typeof describe === 'function'){

    describe('#Test Fetch', ()=>{
        let count = 0;
        const fakeFetch = (url) =>
        {
            const arr = url.split('/');
            let id = Number(arr[arr.length-1]);
            if(id<=0 || id > 30)
                    return 'out of range'
            
            else 
            return url;
        
    }
}
    describe('#Test Fetch', ()=>{
        let count = 0;
        const fakeFetch = (url) =>
        {
            return url;
        
    }

        it ('miss typed address', ()=>{
            assert.equal(getPost(fakeFetch),'https://randomuser.me/api/');
        })
        it ('out of range', ()=>{
            assert.equal(getPost(fakeFetch, 31),'out of range');
        
    })
    
}


    )}
