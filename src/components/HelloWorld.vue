<template>
  <div class="row justify--center">
    <div class="flex md6 lg6">
      <va-card color="fourth">
        <va-card-content>
          <va-avatar
            class="image"
            :size="200"
            src="assets/1623171464703.jpg"
            contain
          />
        </va-card-content>
        <va-card-content>
          <div class="second display-3 mb-2">Johnathon Dillon</div>
          <div class="fifth display-4 mt-2">Software Developer</div>
          <va-button
            class="mt-4 mr-2"
            color="second"
            gradient
            href="https://drive.google.com/uc?export=download&id=1IcWmIk6UPUjMQzv_f8wRZPjxfXRy6Wnr"
          >
            Download Resume
          </va-button>
          <va-button
            class="mt-4 ml-2"
            color="fifth"
            gradient
            href="https://www.linkedin.com/in/johnathondillon8722/"
            target="_blank"
          >
            Linkedin
          </va-button>
        </va-card-content>
        <va-card-content>
          <blockquote style="background: var(--va-third)" class="va-blockquote">
            <p class="second display-6">
              I'm a software developer that loves learning new things and
              implementing them where I can.
            </p>
          </blockquote>
        </va-card-content>

        <va-divider />
        <va-card-content>
          Main Technologies I've used professionally
        </va-card-content>
        <va-card-content>
          JavaScript, Vue.js, Vuex, Vuetify, Cypress, GraphQL, Node.js, Lambda,
          API Gateway, S3, DynamoDB, SQL, C#
        </va-card-content>
        <va-divider />
        <va-card-title class="primary"> EXPERIENCE </va-card-title>
        <va-card-title>
          <span class="second mr-2">Curate, St. Louis, MO</span> —
          <span class="fifth mx-2">Software Developer</span>May 2021 - Present
        </va-card-title>

        <va-card-content>
          <ul class="va-unordered">
            <li>
              Worked with the Curate team to rebuild the Curate app from the
              ground up using modern web technologies.
            </li>
            <li>
              Implemented an automated testing framework using cypress.io that
              runs in CI via GitHub Actions.
            </li>
            <li>
              Participated in peer code reviews and the ability to provide
              constructive feedback.
            </li>
            <li>
              Worked in an Agile team process, collaborating closely with peer
              developers and product owners.
            </li>
          </ul>
        </va-card-content>

        <va-card-title>
          <span class="second mr-2">Bizlibrary, St. Louis, MO</span> —
          <span class="fifth mx-2">Software Developer</span>October 2018 - May
          2021
        </va-card-title>
        <va-card-content>
          <ul class="va-unordered">
            <li>
              Built and maintained customer-facing web applications that manage
              every aspect of employee learning and performance.
            </li>
            <li>
              Worked as the main front end developer during the initial build of
              the reporting app.
            </li>
            <li>
              Used languages and technologies, including C#, Microsoft SQL
              Server, JavaScript, HTML, and CSS.
            </li>
            <li>
              Used of variety of frameworks including KnockoutJS, VueJS,
              Bootstrap, SemanticUI, .Net MVC, .Net Core, Sass, Node.JS, and
              Amazon Web Services (AWS) technologies such as Lambda, API
              Gateway, S3, DynamoDb, Redshift, Cloudsearch.
            </li>
            <li>Troubleshooting and application support of issues and bugs.</li>
          </ul>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>
<style>
li {
  text-align: left;
  margin: 15px 5px !important;
}
.primary {
  color: var(--va-primary) !important;
}
.second {
  color: var(--va-second) !important;
}
.third {
  color: var(--va-third) !important;
}
.fourth {
  color: var(--va-fourth) !important;
}
.fifth {
  color: var(--va-fifth) !important;
}
</style>

// https://www.youtube.com/watch?v=dQw4w9WgXcQ
