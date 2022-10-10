import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getUserProfile } from "../../../services/users";
import banner from "./../../../assets/images/banner.jpg";
import SpinnerAnimation from "../../../components/animations/SpinnerAnimation";
import { Flex, Box, Image, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useMediaQuery } from "@chakra-ui/react";

const HomeUserView = () => {
	const { data, isLoading, refetch } = useQuery(["userProfile"], () => getUserProfile());

	const profile = data?.data?.results[0];

	const [isLarge] = useMediaQuery("(min-width: 1300px)");
	const [isMiddle] = useMediaQuery("(min-width: 800px)");

	return (
		<>
			{isLoading ? (
				<SpinnerAnimation />
			) : (
				<VStack flexDirection={"column"} alignItems={isLarge || isMiddle ? "center" : "flex-start"} gap={2} mt={isLarge ? "20px" : "0"}>
					<Flex
						flexDirection={"column"}
						gap={4}
						alignItems={"flex-start"}
						backgroundColor={"white"}
						width={isLarge ? "50%" : isMiddle ? "65%" : "100%"}
						height={"330px"}
						borderRadius={isLarge || isMiddle ? "10px" : "0"}
					>
						<Flex height={isLarge ? "150px" : "120px"} backgroundColor={"white"} mb={6}>
							<Box position={"absolute"} width={isLarge ? "50%" : isMiddle? "65%" : "100%"} height={isLarge ? "150px" : "100px"}>
								<Image
									src={banner}
									alt="banner"
									height={"100%"}
									width={"100%"}
									objectFit={"cover"}
									borderRadius={isLarge ? "10px 10px 0px 0px" : "0"}
								/>
							</Box>

							<Box position={"absolute"} top={isLarge ? "85px" : 50} left={isLarge ? "27%" : isMiddle ? "20%" : "5%"} width={100} height={100} borderRadius={"50%"}>
								<Box width={"100px"} height={"100px"} border={"4px solid white"} borderRadius={"50%"}>
									<Image
										src={profile?.picture?.large}
										alt="profile"
										width={"100%"}
										height={"auto"}
										borderRadius={"50%"}
										objectFit={"cover"}
									/>
								</Box>
								<Flex
									wrap={"nowrap"}
									justifyContent={"center"}
									alignItems={"center"}
									position={"absolute"}
									backgroundColor={"white"}
									top={"55px"}
									left={"70%"}
									width={"40px"}
									height={"40px"}
									borderRadius={50}
									border={"2px solid #f5f5f5"}
								>
									<svg viewBox="0 0 16 16" data-supported-dps="16x16" fill="gray" style={{ width: "25px", height: "auto" }}>
										<path d="M10 9a2 2 0 11-2-2 2 2 0 012 2zm5-2.5V14H1V6.5A2.5 2.5 0 013.5 4h.75L5 2h6l.75 2h.75A2.5 2.5 0 0115 6.5zM11 9a3 3 0 10-3 3 3 3 0 003-3z"></path>
									</svg>
								</Flex>
							</Box>
						</Flex>

						<Box pl={5}>
							<Box mb={2}>
								<Text fontSize={"20px"} fontWeight={"semibold"}>
									{profile?.name?.first} {profile?.name?.last}
								</Text>
								<Text fontWeight={"normal"}>Full-stack developer at SISA, S.A.</Text>
							</Box>
							<Box>
								<Text color={"gray"} fontWeight={"light"}>
									{profile?.location?.city}, {profile?.location?.country} - {profile?.location?.state}
								</Text>
							</Box>
							<Box>
								<Text color={"gray"} fontWeight={"light"}>
									{profile?.location?.street?.number} {profile?.location?.street?.name}
								</Text>
							</Box>
						</Box>
					</Flex>

					{/* Cards */}
					<Flex
						flexDirection={isLarge ? "row" : "column"}
						gap={4}
						width={isLarge ? "50%" : isMiddle ? "65%" : "100%"}
						flexWrap={"wrap"}
						justifyContent={"space-between"}
					>
						<Flex
							flexDirection={"column"}
							alignItems={"flex-start"}
							backgroundColor={"white"}
							height={"220px"}
							width={isLarge ? "48%" : "100%"}
							borderRadius={isLarge || isMiddle ? "10px" : "0"}
						>
							<Flex flexDirection={"column"} gap={3} p={5}>
								<Box>
									<Text fontSize={"18px"} fontWeight={"light"}>
										Personal Information
									</Text>
								</Box>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/666/666201.png" width={"20px"} />
										<Text fontSize={{ lg: "16px" }} fontWeight={"normal"}>
											Gender:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{profile?.gender}
										</Text>
									</Flex>
								</Flex>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/3596/3596097.png" alt="postal code" width={"20px"} />
										<Text ml={1} fontSize={"16px"} fontWeight={"normal"}>
											{profile?.id?.name}:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{profile?.id?.value}
										</Text>
									</Flex>
								</Flex>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/1396/1396569.png" alt="postal code" width={"20px"} />
										<Text ml={1} fontSize={"16px"} fontWeight={"normal"}>
											Date of Birth:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{dayjs(profile?.dob?.date).format("DD/MM/YYYY")}
										</Text>
									</Flex>
								</Flex>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/4753/4753121.png" alt="postal code" width={"20px"} />
										<Text ml={1} fontSize={"16px"} fontWeight={"normal"}>
											Age:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{profile?.dob?.age}
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>

						<Flex
							flexDirection={"column"}
							alignItems={"flex-start"}
							backgroundColor={"white"}
							width={isLarge ? "48%" : "100%"}
							height={"220px"}
							borderRadius={isLarge || isMiddle ? "10px" : "0"}
						>
							<Flex flexDirection={"column"} gap={3} p={5}>
								<Box>
									<Text fontSize={"18px"} fontWeight={"light"}>
										Location Information
									</Text>
								</Box>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/535/535188.png" width={"20px"} />
										<Text fontSize={"16px"} fontWeight={"normal"}>
											Direction:
										</Text>
									</Flex>
									<Text ml={7} fontSize={"16px"} fontWeight={"light"}>
										{profile?.location?.country}, {profile?.location?.state} {profile?.location?.city} {profile?.location?.street?.number}{" "}
										{profile?.location?.street?.name}
									</Text>
								</Flex>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/5668/5668011.png" alt="postal code" width={"20px"} />
										<Text ml={1} fontSize={"16px"} fontWeight={"normal"}>
											Postcode:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{profile?.location?.postcode}
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>

						<Flex
							flexDirection={"column"}
							alignItems={"flex-start"}
							backgroundColor={"white"}
							width={isLarge || isMiddle ? "100%" : "100%"}
							height={"200px"}
							borderRadius={isLarge ? "10px" : "0"}
						>
							<Flex flexDirection={"column"} gap={3} p={5}>
								<Box>
									<Text fontSize={"18px"} fontWeight={"light"}>
										Contact Information
									</Text>
								</Box>

								<Flex flexDirection={"column"}>
									<Flex gap={2} flexWrap={"wrap"}>
										<Image src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="postal code" width={"20px"} />
										<Text ml={1} fontSize={"16px"} fontWeight={"normal"}>
											Email:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{profile?.email}
										</Text>
									</Flex>
								</Flex>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/3059/3059502.png" width={"20px"} />
										<Text fontSize={"16px"} fontWeight={"normal"}>
											Phone:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{profile?.phone}
										</Text>
									</Flex>
								</Flex>

								<Flex flexDirection={"column"}>
									<Flex gap={2}>
										<Image src="https://cdn-icons-png.flaticon.com/512/15/15874.png" alt="postal code" width={"20px"} />
										<Text ml={1} fontSize={"16px"} fontWeight={"normal"}>
											Cell Phone:
										</Text>
										<Text ml={1} fontSize={"16px"} fontWeight={"light"}>
											{profile?.cell}
										</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</VStack>
			)}
		</>
	);
};

export default HomeUserView;
