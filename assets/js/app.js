const order_form = document.querySelector('.order_form');
const counter_section = document.querySelector('.counter-section');

order_form.addEventListener('submit', function (e) {
    e.preventDefault();
    const end_time = document.querySelector('input[type="time"]').value;
    const end_date = document.querySelector('input[type="date"]').value;

    if (end_date == '' || end_time == '') {
        alert('all feilds are required');
    } else {
        setInterval(() => {
            const current_time = new Date();
            const end_timee = new Date(end_date + ' ' + end_time);

            const time_difference = (end_timee - current_time);

            let total_seconds = Math.floor(time_difference / 1000);
            let total_minutes = Math.floor(total_seconds / 60);
            let total_hours = Math.floor(total_minutes / 60);
            let total_days = Math.floor(total_hours / 24);

            let hour = total_hours - (total_days * 24);
            let min = total_minutes - (total_days * 24 * 60) - (hour * 60);
            let sec = total_seconds - (total_days * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60);

            counter_section.innerHTML = `
            <span class="day">${total_days > 9 ? total_days : '0'+total_days}:</span>
			<span class="hour">${hour > 9 ? hour : '0'+hour}:</span>
			<span class="minute">${min > 9 ? min : '0'+min}:</span>
			<span class="second">${sec > 9 ? sec : '0'+sec}</span>
        
        `;
        }, 1000);

    }


});