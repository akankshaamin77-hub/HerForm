
document.addEventListener("DOMContentLoaded", function () {

    // ELEMENTS
    const searchInput = document.getElementById("searchInput");
    const locationFilter = document.getElementById("locationFilter");
    const searchBtn = document.getElementById("searchBtn");
    const sellerGrid = document.getElementById("sellerGrid");

    const sellerCards = document.querySelectorAll(".seller-card");
    const categoryCards = document.querySelectorAll(".category-card");

    let selectedCategory = "All";

    // SEARCH AND FILTER SELLERS
    function filterSellers() {

        const searchText = searchInput.value.toLowerCase().trim();
        const selectedLocation = locationFilter.value;

        sellerCards.forEach(card => {

            const cardText = card.innerText.toLowerCase();
            const cardCategory = card.dataset.category;
            const cardLocation = card.dataset.location;

            const matchesSearch = cardText.includes(searchText);

            const matchesLocation =
                selectedLocation === "All" ||
                cardLocation === selectedLocation;

            const matchesCategory =
                selectedCategory === "All" ||
                cardCategory === selectedCategory;

            card.style.display =
                matchesSearch && matchesLocation && matchesCategory
                    ? "block"
                    : "none";

        });

    }

    // SEARCH BUTTON
    searchBtn.addEventListener("click", function () {

        selectedCategory = "All";
        filterSellers();

        document.getElementById("women").scrollIntoView({
            behavior: "smooth"
        });

    });

    // SEARCH WHILE TYPING
    searchInput.addEventListener("input", filterSellers);

    // FILTER WHEN LOCATION CHANGES
    locationFilter.addEventListener("change", filterSellers);

    // CATEGORY BUTTONS
    categoryCards.forEach(button => {

        button.addEventListener("click", function () {

            selectedCategory = this.dataset.category;

            filterSellers();

            document.getElementById("women").scrollIntoView({
                behavior: "smooth"
            });

        });

    });

    // VIEW ALL BUTTON
    document.getElementById("viewAllBtn")
        .addEventListener("click", function () {

            selectedCategory = "All";
            searchInput.value = "";
            locationFilter.value = "All";

            filterSellers();

        });

    // CUSTOMER BUTTON
    document.getElementById("customerBtn")
        .addEventListener("click", function () {

            document.getElementById("explore").scrollIntoView({
                behavior: "smooth"
            });

        });

    // SELLER REGISTRATION BUTTONS
    function goToSellerSection() {

        document.getElementById("join").scrollIntoView({
            behavior: "smooth"
        });

    }

    document.getElementById("sellerBtn")
        .addEventListener("click", goToSellerSection);

    document.getElementById("joinBtn")
        .addEventListener("click", goToSellerSection);

    document.getElementById("startSellingBtn")
        .addEventListener("click", function () {

            alert("Welcome to HerForm! Seller registration will be available soon.");

        });

    // POST REQUIREMENT
    document.getElementById("postRequirementBtn")
        .addEventListener("click", function () {

            const requirement = prompt(
                "Please describe the product or service you need:"
            );

            if (requirement && requirement.trim() !== "") {

                alert(
                    "Thank you! Your requirement has been received in this demo:\n\n" +
                    requirement
                );

            }

        });

    // BUSINESS PROFILE BUTTONS
    document.querySelectorAll(".profileBtn")
        .forEach(button => {

            button.addEventListener("click", function () {

                const sellerName =
                    this.closest(".seller-card")
                    .querySelector("h3").innerText;

                alert(
                    "Business Profile: " + sellerName +
                    "\n\nFull business profiles will be available soon!"
                );

            });

        });

    // LANGUAGE BUTTON DEMO
    const languageBtn = document.getElementById("languageBtn");

    languageBtn.addEventListener("click", function () {

        if (this.dataset.language === "kn") {

            this.dataset.language = "en";
            this.innerText = "ಕನ್ನಡ | EN";

        } else {

            this.dataset.language = "kn";
            this.innerText = "EN | ಕನ್ನಡ";

        }

        alert("Language selection changed. Full translation will be added later.");

    });

});
