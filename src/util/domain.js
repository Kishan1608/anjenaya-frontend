export default process.env.NODE_ENV === 'development' 
? "http://localhost:5000" 
: process.env.NODE_ENV === 'production' 
&& 'https://anjenaya-wealth-management.onrender.com';
