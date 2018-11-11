class NaviBar {

    constructor(menuList) {
        this.menuList = menuList;
        this.htmlContainer = "#myTopnav";
        this.maskContainer = ".mask";
    }

    /** 
     * Rendering Menu Bar.
     */
    renderHugeNagiBar() {

        document.querySelector(this.htmlContainer).innerHTML = '';

        let homeItem = document.createElement("a"),
            hamburgerIcon = document.createElement("a");
        homeItem.setAttribute("href", "#home");
        homeItem.classList.add("logo");

        document.querySelector(this.htmlContainer).appendChild(homeItem);

        this.menuList['items'].forEach(element => {

            if (element['items'].length == 0) {

                let menuItem = document.createElement("a");
                menuItem.setAttribute("href", element['url']);
                menuItem.innerHTML = element['label'];
                document.querySelector(this.htmlContainer).appendChild(menuItem);
            } else {

                document.querySelector(this.htmlContainer).appendChild(this.renderSubItems(element['items'], element['label']));

            }

        });

        hamburgerIcon.setAttribute("id", "hamburgerIcon");
        hamburgerIcon.classList.add("icon");
        hamburgerIcon.setAttribute("href", "javascript:void(0);");

        document.querySelector(this.htmlContainer).appendChild(hamburgerIcon);

        this.setEventToHamburgerIcon();
        this.setMouseoverEventSubMenu();

    }

    /** 
     * Set click event to HamburgerIcon.
     */
    setEventToHamburgerIcon() {

        document.getElementById("hamburgerIcon").addEventListener("click", () => {
            let res = document.getElementById("myTopnav");
            if (res.className === "huge-topnav") {
                res.className += " responsive";
            } else {
                res.className = "huge-topnav";
            }
        });

    }

    /** 
     * Append each sub items to main item.
     */
    renderSubItems(itemList, label) {

        let subMenuContainer = document.createElement("div"),
            buttonIcon = document.createElement("button"),
            subMenuWrapper = document.createElement("div");

        subMenuContainer.classList.add("dropdown");
        buttonIcon.classList.add("dropbtn");
        buttonIcon.innerHTML = label;

        subMenuWrapper.classList.add("dropdown-content");
        subMenuContainer.appendChild(buttonIcon);

        itemList.forEach(element => {

            let menuItem = document.createElement("a");
            menuItem.setAttribute("href", element['url']);
            menuItem.innerHTML = element['label'];
            menuItem.classList.add("sub-link");
            subMenuWrapper.appendChild(menuItem);
        });

        subMenuContainer.appendChild(subMenuWrapper);

        return subMenuContainer;
    }

    /** 
     * Adding mask and removing mask for  mouseover and mouseout events.
     */
    setMouseoverEventSubMenu() {

        document.querySelectorAll('.dropdown-content')
            .forEach(item => item.addEventListener('mouseover', (event) => {
                if (!event.target.classList.contains("open")) {
                    event.target.classList.add('open');
                    document.querySelector(this.maskContainer).classList.add("mask-show");

                }
            }));

        document.querySelectorAll('.dropdown-content')
            .forEach(item => item.addEventListener('mouseout', (event) => {
                if (event.target.classList.contains("open")) {
                    event.target.classList.remove('open');
                    document.querySelector(this.maskContainer).classList.remove("mask-show");
                }
            }));
    }
}

module.exports = NaviBar;