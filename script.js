const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  
    calendarDays.innerHTML = '';

  
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
  
    for (let i = 0; i < firstDay.getDay(); i++) {
        calendarHTML += '<div class="day"> </div>'; 
    }
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const isAvailable = Math.random() < 0.5; 
        const className = isAvailable ? 'available' : 'unavailable';
        calendarHTML += `<div class="${className}">${day}</div>`;
    }
    calendarDays.innerHTML = calendarHTML;
    }
}

prevMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});