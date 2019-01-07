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
      <link
        rel="icon"
        type="image/png"
        href="../static/images/icons/favicon.ico"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/vendor/bootstrap/css/bootstrap.min.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/vendor/animate/animate.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/vendor/css-hamburgers/hamburgers.min.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/vendor/animsition/css/animsition.min.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/vendor/select2/select2.min.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../static/vendor/daterangepicker/daterangepicker.css"
      />

      <link rel="stylesheet" type="text/css" href="../static/css/util.css" />
      <link rel="stylesheet" type="text/css" href="../static/css/main.css" />
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
