<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
    <!-- <link rel="preload" href="https://checkout.razorpay.com/v1/checkout.js" as="script"> -->

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
    <style>
        body,
        #my-background {
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100%;
        }
    </style>
</head>

<body class="font-sans antialiased" id="my-background" >
    @inertia
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let vantaEffect;

            // Initialize Vanta.js BIRDS effect
            const initVantaBirds = () => {
                if (vantaEffect) vantaEffect.destroy(); // Destroy previous instance
                vantaEffect = VANTA.BIRDS({
                    el: "#my-background",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color2: 0xe1c11d, // Secondary color for the birds
                    birdSize: 0.80, // Size of birds
                    wingSpan: 10.00, // Span of bird wings
                    separation: 1.00, // Separation distance between birds
                    alignment: 8.00, // Alignment of birds
                    cohesion: 64.00, // Cohesion of bird movement
                    quantity: 2.00, // Number of birds
                    backgroundColor: 0x323437
                    // backgroundColor: 0x1e1e1e 1973790
                });
            };

            // Apply effect on page load
            initVantaBirds();

            // Handle Inertia.js page transitions
            document.addEventListener("inertia:finish", initVantaBirds);

            // Optional cleanup on page unload
            window.addEventListener("beforeunload", () => {
                if (vantaEffect) vantaEffect.destroy();
            });
        });
    </script>
</body>

</html>