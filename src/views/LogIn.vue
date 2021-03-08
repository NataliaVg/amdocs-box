<template>
  <div class="login">
    <Header/>
    <Footer/>
  </div>
</template>

<script>

export default {
  name: 'LogIn',
};
</script>

<script>
const Header = require('../components/LogIn/Header')
const Form = require('../components/LogIn/Form')

module.exports = {
  components:{
    Header,
    Form
  }
}
</script>
