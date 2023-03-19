export default process.env.NODE_ENV === 'development' 
? "http://13.234.158.86/:5000" 
: process.env.NODE_ENV === 'production' 
&& 'https://anjenaya-wealth-management.onrender.com';
