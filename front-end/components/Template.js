import Head from "next/head";
import Link from "next/link";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel, faUser, faHome, faFire, faPlusSquare, faComment } from '@fortawesome/free-solid-svg-icons'
// library.add(faStroopwafel)
// library.add(faUser)
// library.add(faHome)
// library.add(faFire)
// library.add(faPlusSquare)
// library.add(faComment)

const Template = props => (
  <div>
    <Head>
      <title>Sauce</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
      <link rel="stylesheet" href="../static/teste.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
    </Head>

   

    <div className="container-fluid">{props.children}</div>

    <script src="../static/vendor/jquery/jquery-3.2.1.min.js" />

    <script src="../static/vendor/animsition/js/animsition.min.js" />

    <script src="../static/vendor/bootstrap/js/popper.js" />
    <script src="../static/vendor/bootstrap/js/bootstrap.min.js" />

    <script src="../static/vendor/select2/select2.min.js" />

    <script src="../static/vendor/daterangepicker/moment.min.js" />
    <script src="../static/vendor/daterangepicker/daterangepicker.js" />

    <script src="../static/vendor/countdowntime/countdowntime.js" />

    <script src="../static/js/main.js" />
  </div>
);

export default Template;
