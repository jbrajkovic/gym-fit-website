<template>
  <div class="home">
    <Homepage/>
    <Services/>
    <Newsletter />
    <Coaches />
    <BMICalculator />
    <Partners />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '../components/LandingPage/LandingPage'
import Services from '../components/Services/Services'
import Newsletter from '../components/Newsletter/Newsletter'
import Coaches from '../components/Coaches/Coaches'
import BMICalculator from '../components/BMICalculator/BMICalculator'
import Partners from '../components/Partners/Partners'
import Footer from '../components/Footer/Footer'

export default {
  name: 'Home',
  components: {
    Homepage,
    Services,
    Newsletter,
    Coaches,
    BMICalculator,
    Partners,
    Footer
  }
}
</script>
