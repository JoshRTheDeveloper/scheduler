$(document).ready(function () {
    const currentDate = dayjs().format('MMMM D, YYYY');
    $('#currentDay').text(currentDate);

    function timeChecker() {
        const currentTime = new Date().getHours();

        $(".time-block").each(function () {
            var blockStatus = parseInt($(this).attr("id").split("hour-")[1]);

            if (blockStatus < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockStatus === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }

    
    for (let i = 8; i <= 17; i++) {
        const key = `hour-${i}`;
        const storedValue = localStorage.getItem(key);
        $(`#${key} .description`).val(storedValue);
    }

    
    $(".time-block .description").on("input", function () {
        const hourId = $(this).closest(".time-block").attr("id");
        localStorage.setItem(hourId, $(this).val());
    });

    timeChecker();
});
