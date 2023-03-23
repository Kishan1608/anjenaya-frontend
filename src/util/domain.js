export default process.env.NODE_ENV === 'development' 
? "http://localhost:5000" 
: process.env.NODE_ENV === 'production' 
&& 'http://3.108.11.112:4000';
