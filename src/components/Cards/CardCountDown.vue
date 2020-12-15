<template>
    <ul class="flex justify-center text-white select-none">
        <li class="text-center">
            <p class="digit w-16 md:w-32 h-16 md:h-32 leading-16 md:leading-32 font-oswald font-bold text-2xl md:text-5xl rounded-full border border-white border-opacity-30">{{ days | twoDigits }}</p>
            <p class="text uppercase text-xs md:text-sm mt-2 text-white text-opacity-30">Ngày</p>
        </li>
        <li class="h-32 text-5xl leading-32 font-bold text-white text-opacity-0">:</li>
        <li class="text-center">
            <p class="digit w-16 md:w-32 h-16 md:h-32 leading-16 md:leading-32 font-oswald font-bold text-2xl md:text-5xl rounded-full border border-white border-opacity-30">{{ hours | twoDigits }}</p>
            <p class="text uppercase text-xs md:text-sm mt-2  text-white text-opacity-30">Giờ</p>
        </li>
        <li class="h-32 text-5xl leading-32 font-bold text-white text-opacity-0">:</li>
        <li class="text-center">
            <p class="digit w-16 md:w-32 h-16 md:h-32 leading-16 md:leading-32 font-oswald font-bold text-2xl md:text-5xl rounded-full border border-white border-opacity-30">{{ minutes | twoDigits }}</p>
            <p class="text uppercase text-xs md:text-sm mt-2 text-white text-opacity-30">Phút</p>
        </li>
        <li class="h-32 text-5xl leading-32 font-bold text-white text-opacity-0">:</li>
        <li class="text-center">
            <p class="digit w-16 md:w-32 h-16 md:h-32 leading-16 md:leading-32 font-oswald font-bold text-2xl md:text-5xl rounded-full border border-white border-opacity-30">{{ seconds | twoDigits }}</p>
            <p class="text uppercase text-xs md:text-sm mt-2 text-white text-opacity-30">Giây</p>
        </li>
    </ul>
</template>

<script>
let interval = null;
export default {
    name: 'vuejsCountDown',
    props: {
      creationDate: {
        type: String
      },
      creation: {
        type: String
      },
      stop: {
        type: Boolean
      }
    },
    data() {
      return {
        now: Math.trunc((new Date()).getTime() / 1000),
        date: null,
        diff: 0
      }
    },
    created() {
      if (!this.creationDate && !this.creation) {
        throw new Error("Missing props 'creationDate' or 'creation'");
      }
      let endTime = this.creationDate ? this.creationDate : this.creation;
      this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);
      if (!this.date) {
        throw new Error("Invalid props value, correct the 'creationDate' or 'creation'");
      }
      interval = setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
      }, 1000);
    },
    computed: {
      seconds() {
        return Math.trunc(this.diff) % 60;
      },
      minutes() {
        return Math.trunc(this.diff / 60) % 60;
      },
      hours() {
        return Math.trunc(this.diff / 60 / 60) % 24;
      },
      days() {
        return Math.trunc(this.diff / 60 / 60 / 24);
      }
    },
    watch: {
      now() {
        this.diff = this.now - this.date;
        if(this.diff <= 0 || this.stop){
          this.diff = 0;
          // Remove interval
          clearInterval(interval);
        }
      }
    },
    filters: {
      twoDigits(value) {
        if ( value.toString().length <= 1 ) {
          return '0'+value.toString();
        }
        return value.toString();
      }
    },
    destroyed() {
      clearInterval(interval);
    }
}
</script>