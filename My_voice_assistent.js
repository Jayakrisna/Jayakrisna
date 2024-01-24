const coffee = [

{name: 'cappuccino', id: 'cappuccino'},

{name: 'latte', id: 'latte'},

{name: 'americano', id: 'americano'}

];

const dessert = [

{name: 'cheesecake', id: 'cheesecake'},

{name: 'brownie', id: 'brownie'},

{name: 'apple pie', id: 'apple-pie'}

];

let coffeePattern = coffee.map(item => `${item.name}`).join('|');

let dessertPattern = dessert.map(item => `${item.name}`).join('|');

console.log(coffeePattern, dessertPattern);



intent('what can i get here?', p =>{
    p.play('you can order a coffee and a desert');
});

intent('get me a $(COFFEE cappuccino|latte|americano)',
       'one coffee (please|)',
       'i (want|need) coffee', p =>{
    p.play('adding one ${p.COFFEE.value} to your order' , 'sure' , 'here you go');
});

intent('i want a desert', p =>{
    p.play('your add');
});
