var liebe = "\
\n╔══╦══╦╗╔╗\
\n╚╗╔╣╔═╣║║║\
\n─║║║║─║╚╝║\
\n─║║║║─║╔╗║\
\n╔╝╚╣╚═╣║║║\
\n╚══╩══╩╝╚╝\
\n╔╗─╔══╦═══╦══╗╔═══╗\
\n║║─╚╗╔╣╔══╣╔╗║║╔══╝\
\n║║──║║║╚══╣╚╝╚╣╚══╗\
\n║║──║║║╔══╣╔═╗║╔══╝\
\n║╚═╦╝╚╣╚══╣╚═╝║╚══╗\
\n╚══╩══╩═══╩═══╩═══╝\
\n╔══╗╔══╦══╦╗╔╗\
\n║╔╗╚╬╗╔╣╔═╣║║║\
\n║║╚╗║║║║║─║╚╝║\
\n║║─║║║║║║─║╔╗║\
\n║╚═╝╠╝╚╣╚═╣║║║\
\n╚═══╩══╩══╩╝╚╝\
\n╔╗╔╦══╦╗─╔══╦══╗╔╗╔╦══╗\
\n║║║║╔╗║║─║╔╗║╔╗╚╣║║║╔╗║\
\n║║║║║║║║─║║║║║╚╗║╚╝║╚╝║\
\n║╚╝║║║║║─║║║║║─║╠═╗║╔╗║\
\n╚╗╔╣╚╝║╚═╣╚╝║╚═╝║╔╝║║║║\
\n─╚╝╚══╩══╩══╩═══╝╚═╩╝╚╝";
// console.log(liebe);
let currentDate = new Date();
//module.exports.date = currentDate;
global.date = currentDate;

module.exports.getMessage = function(){
    let hour = currentDate.getHours();
    if(hour > 16)
        return "Добрый вечер, " + name;
    else if(hour > 10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
}

