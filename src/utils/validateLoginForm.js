window.addEventListener('load', ()=>{
    /***********************************
         ***********************************
         ********* FORM VALIDATOR   ********
         ***********************************
         **********************************/
        /*********     Inicia sesión con nombre de usuario o correo electrónico (O MEJOR SOLO N. USUARIO????)       **************/
         
         const comprova = document.getElementById('comprovaI');
         comprova.addEventListener('submit', (event)=>{
            event.preventDefault(); // Evita que se envíe el formulario automáticamente
    
            // Valida los campos del formulario
            const errors = validateForm();
            if (errors.length === 0) {
            // Si la validación pasa, se guarda la información al LocalStorage i se envía el formulario

                //1) Declaro un objecte anomin que representa la meva poscició en un instant de temps concret
                console.log(comprova.usuario.value)
                var usuarioInfo = {
                    usuario: comprova.usuario.value,
                    email: comprova.email.value,
                    password: comprova.password.value,
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
                if(!userInTableUsers(email)) errors.push("No existeix el compte de correu especificat");
            }
            
            if(!validateNotNull(password)) errors.push('Introdueix la teva contrasenya');
            else{
                if(!correctPassword(password)) errors.push("La contrasenya especificada no coincideix");
            }

            return errors;
        }
    
        function validateNotNull(value){
            return value !== '';
        }

        function userInTableUsers(email){
            // Comprovación de que el usuario existe
            // Todavia no sé si se puede acceder desde el frontend??
        }

        function correctPassword(password){}
    })