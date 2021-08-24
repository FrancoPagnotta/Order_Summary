const d = document;

const planBtn = d.querySelector('.change-plan-btn');
const payBtn = d.getElementById('payment-btn');
const cancelBtn = d.querySelector('.cancel-order-btn');
const planTitle = d.querySelector('.plan-title');
const planPrice = d.querySelector('.plan-description');
const cardBtns = d.querySelector('.card-btns');


const plans = [
	{
		title: '3 Months Plan',
		price: '$19.99/year'
	},

	{
		title: '6 Months Plan',
		price: '$39.99/year'
	},

	{
		title: 'Annual Plan',
		price: '$59.99/year'
	}
];



let i = 0;

planBtn.addEventListener('click',(e)=> {

	
	planTitle.innerHTML = plans[i].title;
	planPrice.innerHTML = plans[i].price;
			
	i++;
	
	if (i === plans.length) i = 0;
	
});

// error message
let  errorMessage = d.createElement('P');	
errorMessage.classList.add("error-message");
errorMessage.innerHTML = 'Nothing to Cancel';

// event listeners
payBtn.addEventListener('click', (e)=>{
	payBtn.classList.replace('payment-btn','check-icon');	
	
	setTimeout(function(){
		payBtn.innerHTML = '&#10004;';
	},500);	
});

const showError = ()=> {
	cancelBtn.classList.replace('cancel-order-btn','error-message');
	cancelBtn.innerHTML = 'Nothing to cancel';
}

const removeError = ()=> {
	cancelBtn.classList.replace('error-message','cancel-order-btn');
	cancelBtn.innerHTML = 'Cancel Order';
} 

cancelBtn.addEventListener('click', (e)=>{
	
	if (payBtn.className === 'payment-btn') {
		showError();

		setTimeout(function(){
			removeError();
		},1500);
	}
	
	else {
		payBtn.classList.replace('check-icon','payment-btn');
		setTimeout(function(){
			payBtn.innerHTML = 'Proceed to Payment';
		},600);	
	}
	
});

