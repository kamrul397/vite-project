

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello I am Kamrul")
    },2000)
})

try {
    const res = await promise;
    console log(res)
}
catch (err) {
    console.error("Error:", err);
}