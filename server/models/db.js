const mongoose=require('mongoose');

const CONNECTION_URL="mongodb+srv://perihan:perihan987_@cluster0.mqzi0.mongodb.net/?retryWrites=true&w=majority";
const dbUrl = "mongodb://localhost:27017/blog";
//perihan.123
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
//Bağlandoığında konsola bağlantı bilgislerini yazdır
mongoose.connection.on('connected',function() {
	console.log("Mongoose "+dbUrl+" adresindeki veritabanına bağlandı\n");
});

//Bağlantı hatası olduğunda
mongoose.connection.on('error',function(err) {
	console.log("mongoose bağlantı hatası : "+err);
});

//Bağlantı kesildiğinde
mongoose.connection.on('disconnected',function() {
	console.log("mongoose db bağlantısı kesildi !!!!!");
});

close = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose kapatıldı\n ' + msg);
        callback();
    });
};

// nodemon kullanıyorsanız ayrı bir kapatma işlemi gerekir.
process.once('SIGUSR2', function() {
    close('nodemon kapatıldı\n', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Uygulama kapandığında kapat.
process.on('SIGINT', function() {
    close('Uygulama kapatıldı\n', function() {
        process.exit(0);
    });
});

// Herokudan kapatma işlemi gerçekleşirse
process.on('SIGTERM', function() {
    close('heroku kapatıldı\n', function() {
        process.exit(0);
    });
});