export default async function ContactAPI(req, res){
    const { name, email, message} = req.body;

    const user = process.env.user

    const data = {
        name,
        phon,
        email,
        subject,
        meaage,

    };

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure: true,
        auth: {user: user, pass:process.env.pass},
    });
    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "tshiabraham@gmail.com",
            replyTo: email,
            subject: subject,
            html:'
            <p>Name: ${name}</p>
            <p>Name: ${email}</p>
            <p>Name: ${message}</p>
            ',
        })

        return res.status(200).json({message: 'success'});

    } catch (error){
        console.log(error);
        res.status(500).json({
            message: "le message n'a pas été envoyé des le cloud",
        });
    }
    
}