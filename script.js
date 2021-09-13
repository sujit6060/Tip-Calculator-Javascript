function calculateTip()
{
    let amounts = document.getElementById('amounts').value ;
    let services = document.getElementById('services').value;
    let persons = document.getElementById('persons').value;

    //validation
    if (amounts === '' && services == 0)
    {
        alert('Please Enter Values !');
    }

    if(persons === '' || persons <= 1)
    {
        persons = 1;
        document.getElementById('each').style.display = 'none';
    }else
    {
        document.getElementById('each').style.display = 'block';
    }

    let total = (amounts * services) / persons;
    total = Math.round(total * 100 / 100);

    total = total.toFixed(2);

    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}

    document.getElementById('totalTip').style.display = 'none';
    document.getElementById('each').style.display = 'none';

    document.getElementById('calculate').onclick = function(){
        calculateTip();
    };