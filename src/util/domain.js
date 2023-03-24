export default process.env.NODE_ENV === 'development' 
? "https://back.anjenayawealth.com/" 
: process.env.NODE_ENV === 'production' 
&& 'https://back.anjenayawealth.com/';
