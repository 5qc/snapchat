function changeThis(element) {
    element.setAttribute("src", "https://i.picsum.photos/id/100/1000/1779.jpg?hmac=lnECG54JqUDI80sEpAGnPhme464J2pVNk0lC6Zbgx7Q")
}

window.onload = function() {
    var gen = document.getElementById("generated")
    var output = document.querySelectorAll(".output")[0]
    var download = document.getElementById("download")
    var textParent = document.getElementById("caption")
    var text = document.getElementById("content")
    var img = document.getElementById("image")
    var captionInput = document.getElementById("caption-input")
    var imgInput = document.getElementById("image-input")
    var addCaption = document.getElementById("add-caption")
    var settings = document.querySelectorAll(".settings")[0]
    var viewImage = document.getElementById("view-image")
    var backButton = document.getElementById("back-button")
    var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))

    function main() {
        var captions = [
            "all this silverware yet u still wont spoon",
            "Call the police, They cant unrape you...",
            "It's brighter than my future",
            "At least this balloon's attracted to me",
            "You are my #1! I love you.",
            "I don't know you. I'm 10",
            "This is why we can't have nice things",
            "Don't worry what to wear today, your smile goes with any clothes",
            "um hair could u find your chill pls ?",
            "it's wild hot son.",
            "MORNING TEXAS",
            "Starving bruh",
            "❤️hair  is a crown that every girl can wear❤️",
            "please keep this filter snapchat🙏🏻",
            "He's been trying to kiss her all lunch😂",
            "friend zoned him to the max😂😂",
            "I don't think I did it right??? 😂😂😂",
            "Yay! Fridayy!❤️",
            "When ur on a diet, but u just wanna smell it",
            "What kind of flower is this?",
            "No make up 🙌🏻",
            "LOOK AT HOW NATURAL I AM",
            "Spoons time yay 🎉",
            "Good luck tn! 💓 Your biggest fan 😉",
            "Everyone act like they know u when they see u doin good😂",
            "Mood: we meant to be together but we ain't doing it right 🙃"
        ]
        var caption = captions[Math.floor(Math.random() * captions.length)]

        captionInput.value = caption
        text.innerText = caption
        img.setAttribute("src", imgInput.value)

        captionInput.onkeyup = function() {
            text.innerText = captionInput.value
        }
        imgInput.onkeyup = function() {
            img.setAttribute("src", imgInput.value)
        }

        const left = document.querySelectorAll(".left")[0]
        const right = document.querySelectorAll(".right")[0]
        viewImage.onclick = function() {
            right.style.display = "none"
        }
        backButton.onclick = function() {
            right.style.display = "block"
        }

        let captionCount = 1
        addCaption.onclick = function() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                const blackScreen = document.querySelectorAll(".black-screen")[0]
                const warning = document.querySelectorAll(".add-caption-warning")[0]
                const okay = document.getElementById("add-caption-warning-okay")

                blackScreen.style.display = "block"
                warning.style.display = "block"
                okay.onclick = function() {
                    blackScreen.style.display = "none"
                    warning.style.display = "none"
                }
            } else {
                var posArr = []
                var valuesArr = []
                captionCount += 1

                if (document.getElementById("caption-item") && document.getElementById("caption")) {
                    posArr.push(document.getElementById("caption").style.top)
                    valuesArr.push(document.getElementById("caption-input").value)
                    document.getElementById("caption-item").remove()
                    document.getElementById("caption").remove()
                } else {
                    for (let i = 0; i < captionCount; i++) {
                        if (document.getElementById(`caption${i + 1}`)) {
                            posArr.push(document.getElementById(`caption${i + 1}`).style.top)
                        } else {}
                        if (document.getElementById(`caption${i + 1}-input`)) {
                            valuesArr.push(document.getElementById(`caption${i + 1}-input`).value)
                        }
                        if (document.getElementById(`caption${i + 1}-item`)) {
                            document.getElementById(`caption${i + 1}-item`).remove()
                        }
                        if (document.getElementById(`caption${i + 1}`)) {
                            document.getElementById(`content${i + 1}`).parentNode.remove()
                        }
                    }
                }
                for (let i = 0; i < captionCount; i++) {
                    // Create New Textarea
                    const item = document.createElement("div")
                    item.classList.add("item")
                    item.setAttribute("id", `caption${i + 1}-item`)

                    const itemLabel = document.createElement("div")
                    const itemLabelText = document.createTextNode(`Caption #${i + 1}`)
                    itemLabel.classList.add("label")
                    itemLabel.appendChild(itemLabelText)

                    const input = document.createElement("textarea")
                    input.setAttribute("rows", "2")
                    input.setAttribute("id", `caption${i + 1}-input`)

                    item.appendChild(itemLabel).appendChild(input)

                    if (i === 0) {
                        input.value = captionInput.value
                    } else {}

                    settings.prepend(item)

                    // Create New Caption on Image
                    const caption = document.createElement("div")
                    caption.classList.add("caption")
                    caption.setAttribute("id", `caption${i + 1}`)
                    caption.setAttribute("oncontextmenu", "return false")
                    caption.style.top = posArr[i]

                    const captionText = document.createElement("div")
                    if (i === 0) {
                        var captionTextNode = document.createTextNode(document.getElementById("caption1-input").value)
                    } else {}
                    captionText.setAttribute("id", `content${i + 1}`)
                    captionText.setAttribute("oncontextmenu", "return false")
                    captionText.appendChild(captionTextNode)

                    caption.appendChild(captionText)

                    gen.appendChild(caption)
                    dragElement(caption)

                    document.getElementById(`caption${i + 1}-input`).onkeyup = function() {
                        document.getElementById(`content${i + 1}`).innerText = document.getElementById(`caption${i + 1}-input`).value
                    }

                    // Set Values and Stuff
                    if (valuesArr[i] === undefined) {
                        document.getElementById(`caption${i + 1}-input`).value = ""
                        captionText.innerText = ""
                    } else {
                        document.getElementById(`caption${i + 1}-input`).value = valuesArr[i]
                        captionText.innerText = valuesArr[i]
                    }

                    // Remove Caption on Right Click
                    document.getElementById(`caption${i + 1}`).oncontextmenu = function() {
                        if (captionCount !== 1) {
                            captionCount -= 1
                        
                            document.getElementById(`caption${i + 1}`).remove()
                            document.getElementById(`caption${i + 1}-item`).remove()
                        } else {}
                    }
                }
            }
        }

        download.onclick = function() {
            html2canvas(gen, {
                useCORS: true,
                onrendered: function(canvas) {
                    const context = canvas.getContext("2d");
                    const img = new Image();
                    img.src = document.getElementById("image").src;
                    img.onload = context.drawImage(img, 0, 0, img.width, img.height);
                },
                width: img.width,
                height: img.height / 1.0001
            }).then(canvas => {
                const a = document.createElement("a")
                a.href = canvas.toDataURL()
                a.setAttribute("download", `snapchat-caption.png`)
                a.click()
            });
        }
    }
    main()

    dragElement(textParent)
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos2 = pos4 - e.clientY;
            pos4 = e.clientY;
            elmnt.style.top = `${(elmnt.offsetTop - pos2)}px`;

            var top = Number(elmnt.style.top.replace("px", ""))
            var height = img.height - text.clientHeight
            if (top < 0) {
                elmnt.style.top = "0px"
            } else if (top > height) {
                elmnt.style.top = `${height}px`
            }
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}
