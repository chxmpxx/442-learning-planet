<template>
  <div class='quiz'>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ฟาร์มแห่งหนึ่งเลี้ยงไก่ 250 ตัว ตายไป 25 ตัว จึงไปซื้อไก่และหมูมาเพิ่มอย่างละ 30 ตัว ฟาร์มแห่งนี้เลี้ยงสัตว์ทั้งหมดกี่ตัว</p>
        <div class='choice'>
            <div>
                <button>A</button> <span>&nbsp;&nbsp;255 ตัว</span>
            </div>
            <div>
                <button>B</button> <span>&nbsp;&nbsp;265 ตัว</span>
            </div>
            <div>
                <button>C</button> <span>&nbsp;&nbsp;275 ตัว</span>
            </div>
            <div>
                <button>D</button> <span>&nbsp;&nbsp;285 ตัว</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.quiz{
    color: #4B4B4B;
    background-color: rgba(255, 255, 255, 0.9);
    border-width: 1.5px;
    border-radius: 15px;
    margin: 0em 7em 5em 7em;
    padding: 2em 2em 2.5em 2em;
    text-align: left;
}
p{
    font-size: 2em;
}
.choice{
    margin-top: -0.5em;
    font-size: 2em;
    padding-left: 5em;
}
button{
    padding: 0 0.4em 0 0.4em;
    margin-top: 1em;
    border-radius: 50%;
    transition: 0.5s;
    border-width: 1px;
}
button:hover{
    background-color: tomato;
    color: #ffffff;
    border-color: #ffffff;
    transition: 0.5s;
}
</style>