export default function MelhorEnvio(){
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
// myHeaders.append("User-Agent", "brittospaper@gmail.com");

var formdata = new FormData();
formdata.append("grant_type", "authorization_code");
formdata.append("client_id", "1656");
formdata.append("client_secret", "EPY9wQsDjibTxBy3wSb7VmZ8j8P71yy56JV9rji1");
formdata.append("redirect_uri", "https://quasetudo-genildoaraujo77.vercel.app");
formdata.append("code", "def502009a2c469b08ed3285f1a42e9e70255737221c8b087278d44e01e18e25eb5b463feb4696e81b9a590458d897a8b79786b48953477fd4690644cca7f1e47e7aa8516ee64cf4e81195b70da8d351420c0750b64afe715909e2e3865bc384e6975fab6630fbd1878927d6a3eba674d295eea3ae7d50fa058cecbefa052095f39eaa2aeb478251217aed1faf999708e855d55a026b1ea36ef7feaaff57a2366d3583461b99456adb412138a16f4507156ca40010183c469543c49bd77993d76ab38048f880f8f897a0ec7603013e1b4c0c499131fe6c8fec27c9a8fd1d0ca6eae2edf6dd5e534155ea3b83f2bad025d53d1f9dca7560695daa4dd8d4957f3882ff99e5e588bf67b9c0dd9f059ea48d57e03d1ae85746082b58a4e5955b8a17d4a61ba53ec303a62291716121e970badaab854af2388210c61e10ba3eaecc83cab68306139caf80191bf1a1df52918bd4b81da0660d24ae44e10f67884c961267c88c5305e883361bdf406293294e86e13a768ad94bdcb11f46dcebb02498fa018ccd3d74f258c021fded47145de135cf4441310e738aea70a918cc74edb8c45ec5d5a6a2318aec1b7a35");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://sandbox.melhorenvio.com.br/oauth/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('errortoken', error));
}