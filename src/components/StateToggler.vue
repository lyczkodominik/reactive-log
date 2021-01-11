<template>
  <div class="state-toggler">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
name: "StateToggler"
}
</script>

<style scoped lang="scss">
.state-toggler {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  background: #deffde;
  border: 3px solid #51d014;
  border-radius: 50%;
  transition: border .3s;

  &:hover {
    border: 3px solid #0c5404;

    .loader:before,
    .loader:after,
    .loader{
      background-color: #0c5404;
    }
  }

  &:active {
    .loader:before,
    .loader:after,
    .loader{
      background-color: #21b3cb;
    }
  }

  .loader,
  .loader:before,
  .loader:after {
    background: #6ad9cc;
    animation: load1 1s infinite ease-in-out;
    width: 6px;
    height: 7px;
    transition: background-color .2s;
    transition-timing-function: ease-in-out;
    border-radius: 0 0 3px 3px;
  }

  .loader {
    color: transparent;
    margin: 0 10px 20px 10px;
    position: relative;
    font-size: 7px;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }

  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }

  .loader:before {
    left: -1.5em;
    animation-delay: -0.32s;
    color: transparent;
    background: #51d014;
  }

  .loader:after {
    left: 1.5em;
    color: transparent;
    background: #d9db50;
  }

  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
}
</style>

