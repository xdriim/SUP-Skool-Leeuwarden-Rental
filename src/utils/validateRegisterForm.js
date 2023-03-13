window.addEventListener('load', ()=>{
    /***********************************
         ***********************************
         ********* FORM VALIDATOR   ********
         ***********************************
         **********************************/
         
         const comprova = document.getElementById('comprovaI');
         comprova.addEventListener('submit', (event)=>{
            event.preventDefault(); // Evita que se envíe el formulario automáticamente
    
            // Valida los campos del formulario
            const errors = validateForm();
            if (errors.length === 0) {
            // Si la validación pasa, se guarda la información al LocalStorage i se envía el formulario
                //0) Pillo la data
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;

                //1) Declaro un objecte anomin que representa la meva poscició en un instant de temps concret
                console.log(comprova.email.value)
                var usuarioInfo = {
                    usuario: comprova.usuario.value,
                    email: comprova.email.value,
                    password: comprova.password.value,
                    date: dateTime
                };

                //2) La guardo amb local, pero com que es un objecte l'he de transformar amb text
                console.log(usuarioInfo);
                let usuarioTxt = JSON.stringify(usuarioInfo);
                localStorage.setItem("usuarioInfo", usuarioTxt);

            comprova.submit();
            } else {
            // Si hay errores, muestra los mensajes de error
            const errorMessageContainer = document.getElementById('error-messages');
            errorMessageContainer.innerHTML = errors.map(error => `<p>*${error}</p>`).join('');
            }
            
         });

        function validateForm(){
            const email = comprova.email.value;
            const password = comprova.password.value;

            const errors = [];

            if(!validateNotNull(email)){
                errors.push('Introdueix el teu email');
            }else{
                // Aquí es farian tots els requeriments per fer un nou password
                // Entre els requeriments, ha d'estar el de comprovar si ja existeix el compte de correu
            }
            
            if(!validateNotNull(password)) errors.push('Introdueix la teva contrasenya');
            else{
                if(!validatePassword(password)) errors.push("La contrasenya no");
            }

            return errors;
        }
    
        // Se harán mètodos para valorar las credenciales de un nuevo usuario???

        // Dins d'aquest mètode estaran tots el requeriments pel nou password
        function correctEmail(email){}
        function validateNotNull(value){
            return value !== '';
        }
        function minThreeCharacters(input){
            return input.length >= 3
        }
        function maxTenCharacters(input){
            return input.length <= 10
        }
        function validateEmail(input){
            const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return expresionRegular.test(input);
        }

        function userInTableUsers(email){
            // Comprovación de que el usuario existe
            // Todavia no sé si se puede acceder desde el frontend??
        }

        // Dins d'aquest mètode estaran tots el requeriments pel nou password
        function validatePassword(password){}
    })