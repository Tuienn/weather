const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
const day = String(now.getDate()).padStart(2, '0');

const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

const formattedDate = `${year}-${month}-${month}`;
const formattedTime = `${hours}:${minutes}`;

function returnDayFromDate(date){
    const day = new Date(date).getDay()
    

    const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return arr[day]
}

export {formattedDate, formattedTime, returnDayFromDate}