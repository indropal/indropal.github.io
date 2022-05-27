var conv_name_I_flag = true;
var conv_name_ndra_flag = true;
var conv_name_ji_flag = true;
var conv_name_t_flag = true;
var conv_name_Pa_flag = true;
var conv_name_l_flag = true;

var name_interval = 5500;

function conv_name_I(delay)
{
    var i = $("#name_I");

    i.delay(delay).fadeOut( 'fast',
        function(){
            // console.log(conv_I_flag);
            
            if (conv_name_I_flag)
                i.html('ই');
            else
                i.html('I');

            conv_name_I_flag = !(conv_name_I_flag);
            // console.log(conv_I_flag);
        }
    )
    i.fadeIn('fast');
}

function conv_name_ndra(delay)
{
    var ndra = $("#name_ndra");

    ndra.delay(delay).fadeOut( 'fast',
        function(){
            //console.log(conv_ndro_flag);
            
            if (conv_name_ndra_flag)
                ndra.html('ন্দ্র');
            else
                ndra.html('ndra');

            conv_name_ndra_flag = !(conv_name_ndra_flag);
            // console.log(conv_ndro_flag);
        }
    )
    ndra.fadeIn();
}

function conv_name_Pa(delay)
{
    var Pa = $("#name_Pa");

    Pa.delay(delay).fadeOut( 'fast',
        function(){
            //console.log(conv_Pa_flag);
            
            if (conv_name_Pa_flag)
                Pa.html('পা');
            else
                Pa.html('Pa');

            conv_name_Pa_flag = !(conv_name_Pa_flag);
            // console.log(conv_Pa_flag);
            //setTimeout(200);
        }
    )
    Pa.fadeIn('fast');
}

function conv_name_ji(delay)
{
    var ji = $("#name_ji");

    ji.delay(delay).fadeOut('fast',
        function(){
            // console.log(conv_l_flag);
            
            if (conv_name_ji_flag)
                ji.html('জি');
            else
                ji.html('ji');

            conv_name_ji_flag = !(conv_name_ji_flag);
            
            // console.log(conv_l_flag);
            //setTimeout(200);
        }
    )
    ji.fadeIn('fast');
}

function conv_name_t(delay)
{
    var t = $("#name_t");

    t.delay(delay).fadeOut('fast',
        function(){
            // console.log(conv_l_flag);
            
            if (conv_name_t_flag)
                t.html('ৎ');
            else
                t.html('t');

            conv_name_t_flag = !(conv_name_t_flag);
            
            // console.log(conv_l_flag);
            //setTimeout(200);
        }
    )
    t.fadeIn('fast');
}

function conv_name_l(delay)
{
    var l = $("#name_l");

    l.delay(delay).fadeOut('fast',
        function(){
            // console.log(conv_l_flag);
            
            if (conv_name_l_flag)
                l.html('ল');
            else
                l.html('l');

            conv_name_l_flag = !(conv_name_l_flag);
            
            // console.log(conv_l_flag);
            //setTimeout(200);
        }
    )
    l.fadeIn('fast');
}


function orchestrate_Bengali_name_conv()
{
    conv_name_I(0);
    conv_name_l(200);
    conv_name_t(50);
    
    conv_name_I(200);
    conv_name_ndra(100);
    conv_name_ji(50);
    conv_name_l(150);
    
    conv_name_Pa(75);
    conv_name_I(150);
    conv_name_ndra(100);
    conv_name_l(200);
    conv_name_t(100);
    
    conv_name_I(150);
    conv_name_Pa(200);
    conv_name_l(200);
    conv_name_t(50);
    
    conv_name_I(150);
    conv_name_ndra(250);
    conv_name_t(50);
    conv_name_l(200);
    conv_name_Pa(350);
    conv_name_t(50);
}


var convert_name = function(){
    name_interval *= 1.5;
    orchestrate_Bengali_name_conv();
    setTimeout(convert_name, name_interval);
    name_interval = 600000;
}

setTimeout(convert_name, name_interval);