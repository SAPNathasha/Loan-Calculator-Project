function calculateLoan() {
    let loanAmountValue = $("#loan-amount").val();
    let interestRateValue = $("#interest-rate").val();
    let MonthsToPayValue = $("#months-to-pay").val();

    let interest = (loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue;

    let monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed(2);

    $("#payment").html(`Monthly Payment: ${monthlyPayment}`);
}
