import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function LandingPagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full overflow-auto bg-white-A700 shadow-lg">
        <header className="p-[11px] bg-white-A700 shadow-md">
          <div className="w-full mx-auto md:p-5 max-w-[801px]">
            <div className="flex md:flex-col justify-between items-center gap-5">
              <Text size="2xl" as="p" className="flex !text-black-900">
                <span className="text-black-900">P</span>
                <span className="text-green-500">cl</span>
              </Text>
              <div className="flex sm:flex-col justify-end items-center w-[90%] md:w-full gap-[22px] px-px">
                <div className="flex justify-end flex-1">
                  <a href="#" className="self-start">
                    <Text size="xl" as="p" className="!text-gray-800 text-center">
                      Home
                    </Text>
                  </a>
                  <div className="flex self-start justify-end w-[21%] ml-9">
                    <Text size="xl" as="p" className="!text-gray-800 text-center">
                      Features
                    </Text>
                  </div>
                  <div className="flex justify-end w-[28%] ml-4">
                    <Text size="xl" as="p" className="!text-gray-800 text-center">
                      Community
                    </Text>
                  </div>
                  <div className="flex self-end justify-end w-[11%]">
                    <Text size="xl" as="p" className="!text-gray-800">
                      Blog
                    </Text>
                  </div>
                  <div className="flex justify-end ml-4 flex-1">
                    <Text size="xl" as="p" className="!text-gray-800">
                      Pricing
                    </Text>
                  </div>
                </div>
                <Button
                  shape="round"
                  rightIcon={<Img src="images/img_16_arrows_directions_right.svg" alt="16/Arrows & Directions/Right" />}
                  className="gap-[5px] sm:px-5 font-medium min-w-[133px]"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[27px]">
          <div className="h-[450px] relative">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
              renderDotsItem={(props) => {
                return props?.isActive ? (
                  <div className="h-[6px] w-[6px] mr-[5.57px] bg-green-500" />
                ) : (
                  <div className="h-[6px] w-[6px] mr-[5.57px] bg-green_500_75" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex md:flex-col justify-between items-center gap-5 p-[66px] mx-auto md:p-5 bg-gray-100_01">
                    <div className="flex flex-col items-start w-[57%] md:w-full ml-[33px] gap-[22px]">
                      <div className="flex flex-col self-stretch gap-[13px]">
                        <Heading size="xl" as="h1" className="flex !text-[44.55px]">
                          <span className="text-gray-800">Lessons and insights </span>
                          <span className="text-green-500">from 8 years</span>
                        </Heading>
                        <Text size="md" as="p" className="!text-[11.14px]">
                          Where to grow your business as a photographer: site or social media?
                        </Text>
                      </div>
                      <Button shape="round" className="sm:px-5 font-medium min-w-[89px]">
                        Register
                      </Button>
                    </div>
                    <Img
                      src="images/img_illustration.svg"
                      alt="illustration"
                      className="h-[283px] md:w-full mr-[33px]"
                    />
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center w-full gap-2 mx-auto md:p-5 max-w-[772px]">
              <Heading size="lg" as="h2" className="text-center !text-[25.06px]">
                Our Clients
              </Heading>
              <Text size="md" as="p" className="text-center !text-[11.14px]">
                We have been working with some Fortune 500+ clients
              </Text>
            </div>
            <Img
              src="images/img_clients_logos.svg"
              alt="clientslogos"
              className="h-[68px] w-full mx-auto md:p-5 max-w-[801px]"
            />
          </div>
          <div className="flex flex-col gap-[11px]">
            <div className="flex flex-col items-center pb-0.5 gap-1.5">
              <Heading size="lg" as="h2" className="w-[38%] md:w-full text-center !text-[25.06px]">
                Manage your entire community in a single system
              </Heading>
              <Text size="md" as="p" className="text-center !text-[11.14px]">
                Who is Nextcent suitable for?
              </Text>
            </div>
            <div className="flex md:flex-col w-full gap-[88px] mx-auto md:p-5 max-w-[801px]">
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] my-[7px] bg-white-A700 shadow-sm rounded-[5px]">
                <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                  <Img src="images/img_icon.svg" alt="image" className="h-[38px]" />
                  <Heading size="s" as="h3" className="text-center !text-[19.49px] !leading-[25px]">
                    Membership Organisations
                  </Heading>
                </div>
                <Text size="s" as="p" className="w-[94%] md:w-full mb-[5px] text-center !text-[9.74px]">
                  Our membership management software provides full automation of membership renewals and payments
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] bg-white-A700 shadow-sm rounded-[5px]">
                <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                  <Img src="images/img_icon_green_50.svg" alt="icon_one" className="h-[38px]" />
                  <Heading size="s" as="h4" className="text-center !text-[19.49px] !leading-[25px]">
                    National Associations
                  </Heading>
                </div>
                <div className="flex justify-center w-[90%] md:w-full mb-[5px]">
                  <Text size="s" as="p" className="text-center !text-[9.74px]">
                    Our membership management software provides full automation of membership renewals and payments
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[5px] p-[11px] my-[7px] bg-white-A700 shadow-sm rounded-[5px]">
                <div className="flex flex-col self-stretch items-center mt-[5px] gap-[11px]">
                  <Img src="images/img_icon_green_50_38x45.svg" alt="icon_one" className="h-[38px]" />
                  <Heading size="s" as="h5" className="w-[87%] md:w-full text-center !text-[19.49px] !leading-[25px]">
                    Clubs And Groups
                  </Heading>
                </div>
                <Text size="s" as="p" className="w-[94%] md:w-full mb-[5px] text-center !text-[9.74px]">
                  Our membership management software provides full automation of membership renewals and payments
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[26px] gap-[33px]">
          <div>
            <div className="flex md:flex-col justify-center items-center gap-[34px]">
              <Img src="images/img_frame_35.svg" alt="image" className="h-[301px] md:w-full" />
              <div className="flex flex-col items-start w-[48%] md:w-full gap-[22px]">
                <div className="flex flex-col w-[91%] md:w-full gap-[11px]">
                  <Heading size="lg" as="h2" className="!text-[25.06px]">
                    The unseen of spending three years at Pixelgrade
                  </Heading>
                  <Text size="s" as="p" className="!text-[9.74px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                    vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                  </Text>
                </div>
                <Button shape="round" className="sm:px-5 font-medium min-w-[105px]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center gap-5 p-11 md:p-5 bg-gray-100_01">
            <div className="flex flex-col items-start w-[47%] md:w-full ml-[55px] pb-0.5 gap-1.5">
              <Heading size="lg" as="h2" className="flex w-[76%] md:w-full !text-[25.06px]">
                <span className="text-gray-800">Helping a local </span>
                <span className="text-green-500">business reinvent itself</span>
              </Heading>
              <Text size="md" as="p" className="!text-gray-900 !text-[11.14px]">
                We reached here with our hard work and dedication
              </Text>
            </div>
            <div className="w-[47%] md:w-full mr-[54px]">
              <div className="justify-center gap-5 grid-cols-2 md:grid-cols-[1fr] grid">
                <div className="flex items-center w-full gap-[11px]">
                  <Img src="images/img_icon_green_500_33x33.svg" alt="image" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start py-px">
                    <Heading size="s" as="h3" className="!text-[19.49px]">
                      2,245,341
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Members
                    </Text>
                  </div>
                </div>
                <div className="flex justify-end items-center w-full gap-[11px]">
                  <Img src="images/img_icon_green_500.svg" alt="icon_one" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start py-0.5">
                    <Heading size="s" as="h4" className="!text-[19.49px]">
                      46,328
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Clubs
                    </Text>
                  </div>
                </div>
                <div className="flex items-center w-full gap-[11px]">
                  <Img src="images/img_icon_33x33.svg" alt="icon_one" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start justify-center py-px">
                    <Heading size="s" as="h5" className="!text-[19.49px]">
                      828,867
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Event Bookings
                    </Text>
                  </div>
                </div>
                <div className="flex justify-end items-center w-full gap-[11px]">
                  <Img src="images/img_icon_1.svg" alt="icon_one" className="h-[33px] w-[33px]" />
                  <div className="flex flex-col items-start justify-center py-px">
                    <Heading size="s" as="h6" className="!text-[19.49px]">
                      1,926,436
                    </Heading>
                    <Text size="md" as="p" className="!text-[11.14px]">
                      Payments
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex md:flex-col justify-between items-center pt-[3px] gap-5 px-[3px]">
              <div className="w-[29%] md:w-full ml-[135px]">
                <div>
                  <div className="h-[298px] relative">
                    <div className="flex flex-col items-end w-[67%] right-0 top-0 m-auto absolute">
                      <Img src="images/img_padlock.svg" alt="padlock_one" className="h-[71px] mr-[3px] z-[1]" />
                      <div className="flex self-stretch justify-end items-center mt-[-39px]">
                        <div className="h-[211px] flex-1 relative">
                          <Img
                            src="images/img_vector.svg"
                            alt="vector_one"
                            className="h-[35px] bottom-[20%] right-0 m-auto absolute"
                          />
                          <div className="justify-center h-[211px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Img
                              src="images/img_vector_blue_gray_700.svg"
                              alt="vector_three"
                              className="justify-center h-[211px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <div className="justify-center h-[198px] w-[91%] left-0 bottom-0 right-0 top-0 m-auto absolute">
                              <Img
                                src="images/img_vector_white_a700.svg"
                                alt="vector_five"
                                className="justify-center h-[198px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="flex flex-col justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                <div className="flex flex-col w-[23%] md:w-full ml-8">
                                  <div className="flex flex-col">
                                    <Img
                                      src="images/img_vector_green_500.svg"
                                      alt="vector_seven"
                                      className="h-[10px]"
                                    />
                                    <Img
                                      src="images/img_vector_black_900.svg"
                                      alt="vector_nine"
                                      className="h-[10px] mt-[-10px]"
                                    />
                                  </div>
                                </div>
                                <div className="h-[4px] w-[62%] mt-0.5 ml-5 opacity-0.2 bg-white-A700_6c" />
                                <div className="h-[3px] w-[25%] mt-[13px] opacity-0.1 bg-black-900_63" />
                                <div className="h-[12px] mt-1 relative">
                                  <Img
                                    src="images/img_vector_gray_300.svg"
                                    alt="vector_fifteen"
                                    className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="h-[3px] w-[49%] left-[8%] top-[34%] m-auto opacity-0.2 bg-white-A700_6c absolute" />
                                </div>
                                <div className="h-[3px] w-[25%] mt-2.5 opacity-0.1 bg-black-900_63" />
                                <div className="h-[12px] mt-1 relative">
                                  <Img
                                    src="images/img_vector_gray_300_12x74.svg"
                                    alt="vector"
                                    className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="h-[3px] w-[49%] ml-[5px] left-[7%] bottom-0 top-0 my-auto opacity-0.2 bg-white-A700_6c absolute" />
                                </div>
                                <div className="h-[3px] w-[25%] mt-[11px] opacity-0.1 bg-black-900_63" />
                                <div className="h-[12px] mt-1 relative">
                                  <Img
                                    src="images/img_vector_12x74.svg"
                                    alt="vector"
                                    className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="flex flex-col w-[58%] bottom-[31%] left-[7%] m-auto absolute">
                                    <div className="flex justify-center items-center">
                                      <Img
                                        src="images/img_vector_green_500_2x2.svg"
                                        alt="vector"
                                        className="self-start h-[2px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_3x2.svg"
                                        alt="vector"
                                        className="h-[3px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_2x2.svg"
                                        alt="vector"
                                        className="self-start h-[2px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_2x2.svg"
                                        alt="vector"
                                        className="self-start h-[2px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_2x2.svg"
                                        alt="vector"
                                        className="self-start h-[2px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_2x2.svg"
                                        alt="vector"
                                        className="self-start h-[2px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_3x2.svg"
                                        alt="vector_fortyone"
                                        className="h-[3px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_2x2.svg"
                                        alt="vector"
                                        className="h-[2px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_green_500_2x2.svg"
                                        alt="vector"
                                        className="h-[2px] w-[2px]"
                                      />
                                    </div>
                                    <Img src="images/img_group.svg" alt="image_one" className="h-[3px] mt-[-3px]" />
                                  </div>
                                </div>
                                <div className="h-[16px] mt-[21px] ml-[7px] relative">
                                  <Img
                                    src="images/img_vector_green_500_16x55.svg"
                                    alt="vector"
                                    className="justify-center h-[16px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="w-max top-[29%] right-0 left-0 m-auto !text-gray-300_02 !font-montserrat !text-[5.66px] absolute"
                                  >
                                    SING UP
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img src="images/img_vector_green_500_78x59.svg" alt="vector" className="self-end h-[78px]" />
                      </div>
                    </div>
                    <div className="flex justify-end items-start w-[20%] bottom-[21%] right-[1%] m-auto absolute">
                      <Img
                        src="images/img_vector_blue_gray_900_01_101x43.svg"
                        alt="vector_fiftyone"
                        className="h-[101px] z-[1]"
                      />
                      <div className="flex flex-col items-start mt-[11px] ml-[-39px] gap-[18px]">
                        <div className="flex self-end justify-end items-center">
                          <Img src="images/img_vector_blue_gray_900_01_23x3.svg" alt="vector" className="h-[23px]" />
                          <Img
                            src="images/img_vector_blue_gray_900_01_23x3.svg"
                            alt="vector"
                            className="self-end h-[5px]"
                          />
                        </div>
                        <Img src="images/img_vector_blue_gray_900_01.svg" alt="vector" className="h-[11px]" />
                      </div>
                    </div>
                    <Img
                      src="images/img_speech_bubble.svg"
                      alt="speechbubble"
                      className="h-[42px] left-0 top-[31%] m-auto absolute"
                    />
                    <Img
                      src="images/img_character.svg"
                      alt="character_one"
                      className="h-[200px] bottom-0 left-[8%] m-auto absolute"
                    />
                  </div>
                  <Img
                    src="images/img_vector_blue_gray_900_01_1x223.svg"
                    alt="vector"
                    className="self-stretch h-px z-[1]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-[60%] md:w-full mr-24 gap-[22px]">
                <div className="flex flex-col w-[91%] md:w-full gap-[11px]">
                  <Heading size="lg" as="h2" className="!text-[25.06px]">
                    How to design your site footer like we did
                  </Heading>
                  <Text size="s" as="p" className="!text-[9.74px]">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                    massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
                    euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                    faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                    Donec consectetur faucibus ipsum id gravida.
                  </Text>
                </div>
                <Button shape="round" className="sm:px-5 font-medium min-w-[105px]">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between gap-5 p-[22px] sm:p-5 bg-gray-100_01">
            <Img
              src="images/img_image_9.png"
              alt="imagenine_one"
              className="w-[226px] ml-[77px] object-cover rounded-[5px]"
            />
            <div className="flex flex-col w-[65%] md:w-full mr-[77px] gap-[22px]">
              <div className="flex flex-col gap-[11px]">
                <Text size="md" as="p" className="!text-[11.14px] !font-medium !leading-4">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
                  placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </Text>
                <div className="flex flex-col self-start items-start gap-[9px] py-px">
                  <Heading as="h2" className="!text-green-500 !text-[13.92px]">
                    Tim Smith
                  </Heading>
                  <Text size="md" as="p" className="!text-blue_gray-400 !text-[11.14px]">
                    British Dragon Boat Racing Association
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col justify-between items-center gap-5">
                <Img src="images/img_frame_10.svg" alt="image_two" className="h-[33px] sm:w-full" />
                <div className="flex justify-end items-center gap-[7px] py-[5px]">
                  <Heading as="h3" className="!text-green-500 !text-[13.92px]">
                    Meet all customers
                  </Heading>
                  <Img
                    src="images/img_24_arrows_directions_right.svg"
                    alt="24arrows_one"
                    className="h-[16px] w-[16px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[11px]">
            <div className="flex flex-col items-center w-full gap-[3px] mx-auto md:p-5 max-w-[772px]">
              <Heading size="lg" as="h2" className="text-center !text-[25.06px]">
                Caring is the new marketing
              </Heading>
              <Text size="md" as="p" className="w-[57%] md:w-full text-center !text-[11.14px] !leading-4">
                The Nextcent blog is the best place to read about the latest membership insights, trends and more. See
                who&#39;s joining the community, read about how our community are increasing their membership income and
                lot&#39;s more.​
              </Text>
            </div>
            <div className="flex md:flex-col w-full gap-4 mx-auto md:p-5 max-w-[801px]">
              <div className="flex justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <Img
                    src="images/img_image_18.png"
                    alt="imageeighteen"
                    className="self-stretch h-[199px] w-full object-cover rounded-[5px]"
                  />
                  <div className="flex flex-col items-center w-[86%] md:w-full mt-[-66px] gap-[11px] p-[11px] bg-gray-100_01 shadow-xs rounded-[5px]">
                    <Heading as="h3" className="!text-gray-600 text-center !text-[13.92px] !leading-[19px]">
                      Creating Streamlined Safeguarding Processes with OneRen
                    </Heading>
                    <div className="flex justify-center items-center gap-[5px] p-[7px]">
                      <Heading as="h4" className="!text-green-500 !text-[13.92px]">
                        Readmore
                      </Heading>
                      <Img
                        src="images/img_24_arrows_directions_right.svg"
                        alt="readmore_two"
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <Img
                    src="images/img_image_19.png"
                    alt="imagenineteen"
                    className="self-stretch h-[199px] w-full object-cover rounded-[5px]"
                  />
                  <div className="flex flex-col items-center w-[86%] md:w-full mt-[-66px] gap-[18px] p-[11px] bg-gray-100_01 shadow-xs rounded-[5px]">
                    <Heading as="h5" className="!text-gray-600 text-center !text-[13.92px] !leading-[19px]">
                      What are your safeguarding responsibilities and how can you manage them?
                    </Heading>
                    <div className="flex justify-center items-center mb-[7px] gap-[5px]">
                      <Heading as="h6" className="!text-green-500 !text-[13.92px]">
                        Readmore
                      </Heading>
                      <Img
                        src="images/img_24_arrows_directions_right.svg"
                        alt="24arrows_one"
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="flex flex-col items-center w-full">
                  <Img
                    src="images/img_image_20.png"
                    alt="imagetwenty_one"
                    className="self-stretch h-[199px] w-full object-cover rounded-[5px]"
                  />
                  <div className="flex flex-col items-center w-[86%] md:w-full mt-[-66px] gap-[11px] p-[11px] bg-gray-100_01 shadow-xs rounded-[5px]">
                    <Heading as="p" className="!text-gray-600 text-center !text-[13.92px] !leading-[19px]">
                      Revamping the Membership Model with Triathlon Australia
                    </Heading>
                    <div className="flex justify-center items-center gap-[5px] p-[7px]">
                      <Heading as="p" className="!text-green-500 !text-[13.92px]">
                        Readmore
                      </Heading>
                      <Img
                        src="images/img_24_arrows_directions_right.svg"
                        alt="24arrows_one"
                        className="h-[16px] w-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[61px]">
          <div className="flex flex-col items-center gap-[22px] p-[22px] sm:p-5 bg-gray-100_01">
            <Heading size="xl" as="h2" className="w-[64%] md:w-full !text-blue_gray-900_01 text-center !text-[44.55px]">
              Lorem ipsum dolor sit amet consectetuer
            </Heading>
            <Button
              shape="round"
              rightIcon={<Img src="images/img_16_arrows_directions_right.svg" alt="16/Arrows & Directions/Right" />}
              className="gap-[5px] sm:px-5 font-medium min-w-[124px]"
            >
              Get a Demo
            </Button>
          </div>
          <footer className="p-11 md:p-5 bg-blue_gray-900_01">
            <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[772px]">
              <div className="flex flex-col items-start w-[32%] md:w-full gap-[27px]">
                <div className="flex flex-col items-start gap-0.5">
                  <Text as="p" className="!text-gray-100_01">
                    Copyright © 2020 Landify UI Kit.
                  </Text>
                  <a href="#">
                    <Text as="p" className="!text-gray-100_01">
                      All rights reserved
                    </Text>
                  </a>
                </div>
                <div className="flex gap-[11px]">
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                    <Img src="images/img_social_icons.svg" />
                  </Button>
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                    <Img src="images/img_social_icons_white_a700.svg" />
                  </Button>
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                    <Img src="images/img_social_icons_white_a700_22x22.svg" />
                  </Button>
                  <Button color="white_A700" size="xs" shape="circle" className="w-[22px]">
                    <Img src="images/img_path.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center w-[57%] md:w-full gap-5">
                <div className="flex flex-col items-center flex-1">
                  <div className="flex flex-col items-start w-[59%] md:w-full gap-3">
                    <Heading size="md" as="h5" className="self-center !text-white-A700">
                      Company
                    </Heading>
                    <ul className="flex flex-col items-start gap-[5px]">
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Blog
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Contact us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Pricing
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Testimonials
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <div className="flex flex-col items-start w-[69%] md:w-full gap-3">
                    <Heading size="md" as="h5" className="!text-white-A700">
                      Support
                    </Heading>
                    <ul className="flex flex-col items-start gap-[5px]">
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Help center
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Terms of service
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Legal
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Privacy policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-gray-100_01">
                            Status
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col self-start w-[42%] gap-3">
                  <Heading size="md" as="h5" className="!text-white-A700">
                    Stay up to date
                  </Heading>
                  <Input
                    shape="round"
                    type="email"
                    name="date"
                    placeholder="Your email address"
                    suffix={<Img src="images/img_essential_icons_send.svg" alt="Essential Icons / send" />}
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
