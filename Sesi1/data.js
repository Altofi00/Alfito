const namaSaya = "Alfito Dwi Aditya"; //nama variabel jika 2 suku kata, maka kata berikutnya harus huruf gede
let umur = 4;

let biodata = document.getElementById('biodata');
console.log(biodata)

function generateBiodata() {
    let generasi;

    if(umur >10 && umur <=18){
        generasi = "saya generasi Remaja";
    }else if(umur >18 && umur <=30){
        generasi = "saya generasi dewasa"
    }else if(umur>30){
        generasi = "saya generasi tua"
    }else if(umur>2 && umur <=10){
        generasi = "saya masih anak anak"
    }else if(umur>=1 && umur<=2){
        generasi = "saya masih bayii"
    }else{
        generasi = null
    }
    return biodata.innerHTML = generasi;
    //console.log('generasi saya adalah', generasi);
}

console.log(namaSaya);
console.log(umur);

generateBiodata();
