window.onload = function () {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor_follower");
    const btnGit = document.querySelectorAll(".git");
    const btnMail = document.querySelectorAll(".mail");

    // 메인커서 변형
    btnGit.forEach(function (btnG) {
        btnG.addEventListener("mouseover", function () {
            cursor.classList.add("git_hover");
        });
        btnG.addEventListener("mouseleave", function () {
            cursor.classList.remove("git_hover");
        });
    });

    btnMail.forEach(function (btnM) {
        btnM.addEventListener("mouseover", function () {
            cursor.classList.add("mail_hover");
        });
        btnM.addEventListener("mouseleave", function () {
            cursor.classList.remove("mail_hover");
        });
    });

    // 커서 위치 텍스트 출력
    function myCursor(e) {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
    }

    // 트레일러 (+메인 커서) 변형
    function Trailer(e) {
        document.querySelector(".pageX").innerText = e.pageX;
        document.querySelector(".pageY").innerText = e.pageY;

        gsap.to(follower, { duration: 0.6, left: e.pageX - 15, top: e.pageY - 15 });

        document.querySelectorAll("h1").forEach(e => {
            e.addEventListener("mouseover", () => {
                cursor.classList.add("t_hover");
                follower.classList.add("t_hover");
            });
            e.addEventListener("mouseout", () => {
                cursor.classList.remove("t_hover");
                follower.classList.remove("t_hover");
            });
        });

        document.querySelectorAll(".m1").forEach(e => {
            e.addEventListener("mouseover", () => {
                follower.classList.add("m1_hover");
            });
            e.addEventListener("mouseout", () => {
                follower.classList.remove("m1_hover");
            });
        });

        document.querySelectorAll(".m2").forEach(e => {
            e.addEventListener("mouseover", () => {
                follower.classList.add("m2_hover");
            });
            e.addEventListener("mouseout", () => {
                follower.classList.remove("m2_hover");
            });
        });

        document.querySelectorAll(".m3").forEach(e => {
            e.addEventListener("mouseover", () => {
                follower.classList.add("m3_hover");
            });
            e.addEventListener("mouseout", () => {
                follower.classList.remove("m3_hover");
            });
        });
    }
    
    //  즉시 실행 함수, 마우스 이동 시 myCursor, Trailer 실행
    window.addEventListener("mousemove", myCursor);
    window.addEventListener("mousemove", Trailer);
}