<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
    integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
    crossorigin="anonymous"
  />
  <h1>Add Event</h1>

  <div class="wrapper">
    <form @submit.prevent="onSubmit">
      <div class="form-group d-flex align-items-center">
        <div class="icon"><span class="far fa-user"></span></div>
        <input
          autocomplete="off"
          id="name"
          v-model="event.title"
          type="text"
          class="form-control"
          placeholder="Event Title"
        />
      </div>

      <div class="form-group d-flex align-items-center">
        <div class="icon"><span class="far fa-user"></span></div>
        <input
          autocomplete="off"
          id="name"
          v-model="event.description"
          type="text"
          class="form-control"
          placeholder="Event Description"
        />
      </div>

      <div class="form-group d-flex align-items-center">
        <div class="icon"><span class="far fa-user"></span></div>
        <input
          autocomplete="off"
          id="name"
          v-model="event.location"
          type="text"
          class="form-control"
          placeholder="Event Location"
        />
      </div>

      <div class="form-group d-flex align-items-center">
        <div class="icon"><span class="far fa-user"></span></div>
        <input
          autocomplete="off"
          id="name"
          v-model="event.image"
          type="text"
          class="form-control"
          placeholder="Event Image"
        />
      </div>

      <div class="form-group d-flex align-items-center">
        <div class="icon"><span class="far fa-user"></span></div>
        <input
          autocomplete="off"
          id="name"
          v-model="event.date"
          type="text"
          class="form-control"
          placeholder="Event Date"
        />
      </div>

      <div class="form-group d-flex align-items-center">
        <div class="icon"><span class="far fa-user"></span></div>
        <input
          autocomplete="off"
          id="name"
          v-model="event.timee"
          type="text"
          class="form-control"
          placeholder="Event Time"
        />
      </div>

      <input type="submit" class="btn btn-primary mb-3" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        image: '',
        date: '',
        time: '',
        organizer: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.event.id = Math.floor(1000 + Math.random() * 9000)
      this.event.organizer = this.$store.state.user
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'EventDetails',
            params: { id: this.event.id }
          })
        })
        .catch(error =>
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        )
    }
  }
}
</script>
<style scoped>
.disabledButton {
  cursor: not-allowed;
}

.wrapper {
  max-width: 450px;
  margin: 50px auto;
  padding: 20px 30px;
  min-height: auto;
  background-color: #ffffff27;
  border-top: 1px solid #ffffff6e;
  border-left: 1px solid #ffffff6e;
  border-radius: 15px;
}

.wrapper .h5 {
  color: #ddd;
}

.wrapper .form-group {
  border-bottom: 1px solid #ccc;
  margin-bottom: 1.5rem;
}

.wrapper .form-group:hover {
  border-bottom: 1px solid #eee;
}

.wrapper .form-group .icon {
  color: #e8e8e8;
}

.wrapper .form-group .form-control {
  background: inherit;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  color: #e9e9e9;
}

.wrapper .form-group input::placeholder {
  color: #ccc;
}

.wrapper .form-group input:focus::placeholder {
  opacity: 0;
}

.wrapper .form-group .fa-phone {
  transform: rotate(90deg);
}

.wrapper .option {
  color: #ccc;
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
}

.wrapper .option:hover {
  color: #eee;
}

.wrapper .option input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.wrapper .checkmark {
  position: absolute;
  top: 3px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: inherit;
  border: 2px solid #ccc;
  border-radius: 2px;
}

.wrapper .option input:checked ~ .checkmark {
  transition: 300ms ease-in-out all;
}

.wrapper .checkmark:after {
  content: '\2713';
  position: absolute;
  display: none;
  font-weight: 600;
  color: #fff;
  font-size: 0.9rem;
}

.wrapper .option input:checked ~ .checkmark:after {
  display: block;
}

.wrapper .option .checkmark:after {
  left: 2px;
  top: -4px;
  width: 5px;
  height: 10px;
}

.wrapper .btn.btn-primary {
  position: relative;
  color: #eee;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: inherit;
  box-shadow: none;
  overflow: hidden;
}

.wrapper .btn.btn-primary:hover {
  background-color: #b4b4b433;
  color: #fff;
}

.wrapper .terms {
  color: #bbb;
  font-size: 0.85rem;
  text-align: center;
}

.wrapper .terms a {
  text-decoration: none;
  color: #eee;
}

.wrapper .terms a:hover {
  color: #fff;
}

.wrapper .connect {
  position: relative;
}

.wrapper .connect::after {
  content: 'or';
  position: absolute;
  top: -12px;
  width: 80px;
  left: 39%;
  text-align: center;
  color: #eee;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.315);
  background-color: #1f5588;
}

.wrapper .social-links {
  margin-top: 50px;
  position: relative;
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.wrapper .social-links li a {
  font-size: 1.2rem;
  width: 50px;
  height: 50px;
  background-color: #ffffff17;
  border: 1px solid #ffffff66;
  border-right: 1px solid #ffffff33;
  border-bottom: 1px solid #ffffff33;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 30px #004683e0;
  transition: 0.5s;
  overflow: hidden;
}

.wrapper .social-links li a:hover {
  transform: translateY(-20px);
}

.wrapper .social-links li a::before,
.wrapper .btn.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  transform: skew(45deg) translateX(130px);
  transition: 0.5s;
  opacity: 0;
}

.wrapper .social-links li a:hover:before,
.wrapper .btn.btn-primary:hover::before {
  opacity: 1;
  transform: skew(45deg) translateX(-130px);
}

@media (max-width: 460px) {
  .wrapper {
    margin: 15px;
    padding: 20px;
  }

  .wrapper .connect::after {
    left: 38%;
  }
}

@media (max-width: 345px) {
  .wrapper .connect::after {
    left: 32%;
  }
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25remrgba (0, 0, 0, 0.075) !important;
  min-height: 339px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.cart {
  color: white;
  /* position: absolute; */
  top: 10px;
  font-size: 20px;
  right: 0;
  float: right;
  width: 100%;
  text-align: right;
}
.card.shadow-sm.review-box {
  width: 450px;
  margin: auto;
  margin-top: 50px;
  min-height: auto;
  padding: 20px;
}
.card.shadow-sm.review-box li {
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #efefef;
}
</style>
