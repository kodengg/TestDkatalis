function convertToDesimal(satu,dua,tiga,empat){
  angka1 = parseFloat(satu)/100
  angka2 = parseFloat(dua)/100
  angka3 = parseFloat(tiga)/100
  angka4 = parseFloat(empat)/100
  console.log('['+angka1+', '+angka2+', '+angka3+', '+angka4+']')
}

const ikehh = ['33%', '98.1%', '56.44%', '100%']

convertToDesimal(...ikehh)