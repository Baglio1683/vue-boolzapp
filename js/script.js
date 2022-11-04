const { createApp } = Vue; 

const dt = luxon.DateTime; 

  createApp({
    data() {
      return {

        currentContact: 0,

        currentContactBot : 0, 

        searchName : "",

        newObj : {
            date: '10/01/2020 15:30:55',
            message: "",
            status: 'sent'
        },

        in_message: "",

        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        active: false
                    }
                ],

            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        active: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        active: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        active: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        active: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        active: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        active: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        active: false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        active: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        active: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        active: false
                    }
                ],
            }
        ]
        
      }
    },

    created(){
      
        const now = dt.now().setLocale('it').toLocaleString();
        console.log(now.DateTime)
    },


    methods : {

        changeContact(ind){

            this.currentContact = ind; 
        },

        addMessage(){

            this.newObj.message = this.in_message
            this.contacts[this.currentContact].messages.push({...this.newObj}) 
            this.in_message = ""
            this.currentContactBot = this.currentContact
            const addResp =  setTimeout(this.AddRecMess ,1000)
      
          },

          AddRecMess(){

            this.newObj.status ='received'
            this.newObj.message = 'ok'
            this.contacts[this.currentContactBot].messages.push({...this.newObj}) 
            this.newObj.status='sent'
            this.newObj.message = ''
          },

          check(itm){

            let x = itm.name.toLowerCase(); 


            if(this.searchName ==="" || x.includes(this.searchName.toLowerCase())){
             
                itm.visible = true
                return true
                }
                else{
                    itm.visible= false
                    return false
                }

          },

          showOption(ind){

            this.contacts[this.currentContact].messages[ind].active = !this.contacts[this.currentContact].messages[ind].active 

          },

          delMessage(ind){
            this.contacts[this.currentContact].messages.splice(ind,1)
          }

        }

  }).mount('#app')

