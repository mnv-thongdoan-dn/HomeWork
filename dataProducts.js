var products = [
	{id: 1, name: 'Rose', price: 200, img: "https://media.istockphoto.com/photos/pink-rose-bush-in-the-evening-sun-picture-id1319907279?b=1&k=20&m=1319907279&s=170667a&w=0&h=UU7vjGx4T-MrYJwbhggcDMm7teCuyBWZZEVt-GqmcBk="},
	{id: 2, name: 'Orchid', price: 100, img: "https://media.istockphoto.com/photos/white-orchidea-picture-id513998768?b=1&k=20&m=513998768&s=170667a&w=0&h=xCxbqlAefF5F56X-xtFKbQYm5YS8RIvQ2tHQMAtydYA="},
	{id: 3, name: 'Daisy', price: 50, img: "https://media.istockphoto.com/photos/three-daisys-isolated-picture-id182721513?b=1&k=20&m=182721513&s=170667a&w=0&h=5ETRMEso0CipsmzLbQGd42Ntex_Vq7MKL5Kd839-5UI="},
	{id: 4, name: 'Lotus', price: 70, img: "https://media.istockphoto.com/photos/pink-and-white-lotus-flower-for-worshiping-picture-id1083686524?b=1&k=20&m=1083686524&s=170667a&w=0&h=DIj_zNTUG86DDSeIzC0dFOvZHj2G-lfgaJHR2q5liZw="},
	{id: 5, name: 'Statice', price: 1200, img: "https://media.istockphoto.com/photos/beautiful-flowers-of-statice-or-limonium-sinuatum-or-wavyleaf-sea-picture-id1282541329?b=1&k=20&m=1282541329&s=170667a&w=0&h=M9cs8S8nJ3TJQqKFDYYIQQa_k3S6kGRfWY-uVLgM0nw="},
	{id: 6, name: 'Camellia', price: 2200, img: "https://media.istockphoto.com/photos/closeup-of-pastel-pink-camellia-japonica-flowers-blooming-bush-in-the-picture-id1182619325?b=1&k=20&m=1182619325&s=170667a&w=0&h=eyX4ReX90D1F_WbVI7eYfmvQS1XUPmQ-ffHEG--wO1E="},
	{id: 7, name: 'Tulip', price: 800, img: "https://media.istockphoto.com/photos/beautiful-pink-tulips-in-a-vase-picture-id1300699834?b=1&k=20&m=1300699834&s=170667a&w=0&h=xeQMnzzJKNIwfbRrvCai06A42e3dIOjI5dWN_P2LoQQ="},
	{id: 8, name: 'Violet', price: 280, img: "https://images.unsplash.com/photo-1622891597799-17ac7f9ab6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
];

localStorage.setItem("products", JSON.stringify(products))