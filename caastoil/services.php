<?php
$identifier = 'is_services';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <?php include './includes/head.php' ?>
</head>

<body>
    <!-- ========== Header section starts ========= -->
    <?php include './includes/header.php' ?>
    <!-- ========== Header section ends ========= -->

    <!--========= Services banner section starts ========= -->
    <section class="services-banner__section">
        <div class="container services-cont__container">
            <h2>Services</h2>
        </div>
    </section>

    <!--========= Services banner section ends ========= -->

    <!--========= Our services section starts ========= -->
    <section class="our-services__section">
        <div class="container our-services__container">
            <div class="service__tab">
                <button class="tablinks" onclick="openServices(event, 'serviceProcurement')"
                    id="defaultOpen">Procurement</button>
                <button class="tablinks" onclick="openServices(event, 'serviceMechanical')">Offshore Mechanical
                    Installation</button>
                <button class="tablinks" onclick="openServices(event, 'serviceElectrical')">Electrical
                    Instrumentation</button>
                <button class="tablinks" onclick="openServices(event, 'serviceFabrication')">Fabrication
                    Construction</button>
                <button class="tablinks" onclick="openServices(event, 'serviceElectricity')">Electricity
                    Instrumentation</button>
                <button class="tablinks" onclick="openServices(event, 'serviceProject')">Project Management &amp;
                    Construction</button>
                <button class="tablinks" onclick="openServices(event, 'servicePipeline')">Pipeline Works</button>
                <button class="tablinks" onclick="openServices(event, 'serviceTelecom')">Telecommunication</button>
            </div>

            <div class="service__content">
                <div id="serviceProcurement" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/procurement-services.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Procurement</h4>
                        <p>CAAST OIL & GAS has formidable and strong networks that
                            enhance easy and fast acquisition of any material/equipment as
                            many be needed by our clients at the shortest possible time.
                        </p>
                        <p>The procurement covers electrical Instrumentation, civil,
                            mechanical, oil tools, safety equipment etc.</p>
                        <p>We have foreign representatives with on-line-time delivery capability. The
                            following items listed has been supplied by CAAST to various
                            upstream industries: Ball valves with actuators control,
                            masonelian valves, Gate valves, pressure transmiers, Gaskets,
                            Flanges, Recorders, Tubings.</p>
                    </div>

                </div>
                <div id="serviceMechanical" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/offshore-mech.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Offshore Mechanical Installation</h4>
                        <p>In the field of mechanical engineering, we offer welding of pipes
                            of various sizes for transportation of gases and other fluids,
                            sheet steel, steel structure of various forms, precision part
                            machining, multipurpose conveyor system, repairs of
                            machinery and equipment, thread cuing and repairs, pressure
                            testing and installation of pumps and valves, sandblasting,
                            corrosion prevention, insulation coating with all comet system
                            like acrylic, two-componentpoxy, tan epoxy etc.</p>
                    </div>

                </div>
                <div id="serviceElectrical" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/electrical-instru.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Electrical Instrumentation</h4>
                        <p>In a move to render beer
                            services to the Oil and Gas
                            industries, our Company
                            operations cover process,
                            utility, Electrical &
                            instrumentation. Our
                            expertise are in the following
                            areas: </p>
                        <p>Turnkey Project for Electrical,
                            Instrumentation and
                            Automation. This comprises
                            of;</p>
                        <ul>
                            <li>Electrical and PLC based
                                control panels</li>
                            <li>Fire & Gas and Explosion
                                Proof Panels</li>
                            <li>Equipment Calibration and
                                Certiﬁcations</li>
                        </ul>
                    </div>

                </div>
                <div id="serviceFabrication" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/fabrication-const.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Fabrication Construction</h4>
                        <p>We are one of the
                            trustworthy service
                            providers of an array of
                            Fabrication Works. We have
                            a team of qualiﬁed
                            professionals for the timely
                            execution of all the services
                            using high grade raw
                            material. </p>
                        <p>Our services are
                            meticulously planned before
                            their commencement and
                            valued for their reliable &
                            long serving life.</p>
                        <p>These
                            services are executed in a
                            timely manner and can be
                            availed by our customers at
                            reasonable prices.</p>
                    </div>

                </div>
                <div id="serviceElectricity" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/electricity-instrum.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Electricity &amp; Instrumentation</h4>
                        <p>Electrical and
                            instrumentation works
                        </p>
                        <ul>
                            <li>150 km of cables</li>
                            <li>1100 instruments</li>
                            <li>95 tons of E&I Supports</li>
                        </ul>
                    </div>

                </div>
                <div id="serviceProject" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/project-management.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Project Management &amp; Construction</h4>
                        <p>We are one of the trustworthy service providers of an array of
                            Fabrication Works. We have a team of qualiﬁed professionals for
                            the timely execution of all the services using high grade raw
                            material.</p>
                        <p>Our services are meticulously planned before their
                            commencement and valued for their reliable & long serving life.
                            These services are executed in a timely manner and can be
                            availed by our customers at reasonable prices.</p>
                    </div>

                </div>
                <div id="servicePipeline" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/pipeline-works.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Pipeline Works</h4>
                        <p>We are equipped with the expertise to construct and
                            manage pipeline projects. With a modern pipeline
                            construction technique, we aspire to become one of the
                            major players in the pipeline construction industry and
                            have the capacity to mobilize personnel and equipment
                            to any location at short notice.</p>
                        <p>We observe the standards
                            of industry regulations and inspections and are trusted
                            by our clients for satisfactory, timely delivery that
                            exceeds expectations.</p>
                    </div>

                </div>
                <div id="serviceTelecom" class="tabcontent">
                    <div class="tab-img">
                        <img src="./images/telecom.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Telecommunication</h4>
                        <p>EPC Telecommunication project focused on
                            telecommunications systems for two terminal sites of the
                            pipeline (LAN/WAN, telephony on IP, radio-relay
                            equipment, microwaves).
                        </p>
                        <p>Project managed 100% from Nigeria</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="container our-services__container2">
            <div class="service__content2">
                <div id="serviceProcurement" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/procurement-services2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Procurement</h4>
                        <p>CAAST OIL & GAS has formidable and strong networks that
                            enhance easy and fast acquisition of any material/equipment as
                            many be needed by our clients at the shortest possible time.
                        </p>
                        <p>The procurement covers electrical Instrumentation, civil,
                            mechanical, oil tools, safety equipment etc.</p>
                        <p>We have foreign representatives with on-line-time delivery capability. The
                            following items listed has been supplied by CAAST to various
                            upstream industries: Ball valves with actuators control,
                            masonelian valves, Gate valves, pressure transmiers, Gaskets,
                            Flanges, Recorders, Tubings.</p>
                    </div>

                </div>
                <div id="serviceMechanical" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/offshore-mech2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Offshore Mechanical Installation</h4>
                        <p>In the field of mechanical engineering, we offer welding of pipes
                            of various sizes for transportation of gases and other fluids,
                            sheet steel, steel structure of various forms, precision part
                            machining, multipurpose conveyor system, repairs of
                            machinery and equipment, thread cuing and repairs, pressure
                            testing and installation of pumps and valves, sandblasting,
                            corrosion prevention, insulation coating with all comet system
                            like acrylic, two-componentpoxy, tan epoxy etc.</p>
                    </div>

                </div>
                <div id="serviceElectrical" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/electrical-instru2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Electrical Instrumentation</h4>
                        <p>In a move to render beer
                            services to the Oil and Gas
                            industries, our Company
                            operations cover process,
                            utility, Electrical &
                            instrumentation. Our
                            expertise are in the following
                            areas: </p>
                        <p>Turnkey Project for Electrical,
                            Instrumentation and
                            Automation. This comprises
                            of;</p>
                        <ul>
                            <li>Electrical and PLC based
                                control panels</li>
                            <li>Fire & Gas and Explosion
                                Proof Panels</li>
                            <li>Equipment Calibration and
                                Certiﬁcations</li>
                        </ul>
                    </div>

                </div>
                <div id="serviceFabrication" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/fabrication-const2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Fabrication Construction</h4>
                        <p>We are one of the
                            trustworthy service
                            providers of an array of
                            Fabrication Works. We have
                            a team of qualiﬁed
                            professionals for the timely
                            execution of all the services
                            using high grade raw
                            material. </p>
                        <p>Our services are
                            meticulously planned before
                            their commencement and
                            valued for their reliable &
                            long serving life.</p>
                        <p>These
                            services are executed in a
                            timely manner and can be
                            availed by our customers at
                            reasonable prices.</p>
                    </div>

                </div>
                <div id="serviceElectricity" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/electricity-instrum2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Electricity &amp; Instrumentation</h4>
                        <p>Electrical and
                            instrumentation works
                        </p>
                        <ul>
                            <li>150 km of cables</li>
                            <li>1100 instruments</li>
                            <li>95 tons of E&I Supports</li>
                        </ul>
                    </div>

                </div>
                <div id="serviceProject" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/project-management2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Project Management &amp; Construction</h4>
                        <p>We are one of the trustworthy service providers of an array of
                            Fabrication Works. We have a team of qualiﬁed professionals for
                            the timely execution of all the services using high grade raw
                            material.</p>
                        <p>Our services are meticulously planned before their
                            commencement and valued for their reliable & long serving life.
                            These services are executed in a timely manner and can be
                            availed by our customers at reasonable prices.</p>
                    </div>

                </div>
                <div id="servicePipeline" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/pipeline-works2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Pipeline Works</h4>
                        <p>We are equipped with the expertise to construct and
                            manage pipeline projects. With a modern pipeline
                            construction technique, we aspire to become one of the
                            major players in the pipeline construction industry and
                            have the capacity to mobilize personnel and equipment
                            to any location at short notice.</p>
                        <p>We observe the standards
                            of industry regulations and inspections and are trusted
                            by our clients for satisfactory, timely delivery that
                            exceeds expectations.</p>
                    </div>

                </div>
                <div id="serviceTelecom" class="tabcontent2">
                    <div class="tab-img2">
                        <img src="./images/services/telecom2.jpg" alt="">
                    </div>
                    <div class="tab__content">
                        <h4>Telecommunication</h4>
                        <p>EPC Telecommunication project focused on
                            telecommunications systems for two terminal sites of the
                            pipeline (LAN/WAN, telephony on IP, radio-relay
                            equipment, microwaves).
                        </p>
                        <p>Project managed 100% from Nigeria</p>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!--========= Our service section ends ========= -->

    <!-- =========== Commitment section starts ============ -->
    <?php include './includes/commit.php' ?>

    <!-- =========== Commitment section ends ============ -->

    <!-- =========== footer section starts ============ -->
    <?php include './includes/footer.php' ?>

    <!-- =========== footer section ends ============ -->


</body>

</html>