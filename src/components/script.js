const fetchData = async () => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxmYv8Lf78CprE9pje5VVH-4s2ST9AJ9uCxSJ4OjILQo_CBBirgff4EBlUh3rmDyO9O/exec');
    const data = await response.json();
  
    // **Acessa o objeto data após a requisição ser finalizada**
    console.log(data);
  };
  
  fetchData();