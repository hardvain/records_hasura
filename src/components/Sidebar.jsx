import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Collapse,
  Stack,
  Text,
} from '@chakra-ui/core';
import { FaTasks, FaNutritionix, FaCog } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
import Sugar from 'src/assets/Sugar';
import Fruit from 'src/assets/Fruit';
import Project from 'src/assets/Project';
import Money from 'src/assets/Money';
import Medicine from 'src/assets/Medicine';
import Brain from 'src/assets/Brain';
import Team from 'src/assets/Team';
import Settings from 'src/assets/Settings';
import Heart from 'src/assets/Heart';
import Sleep from 'src/assets/Sleep';
import Target from 'src/assets/Target';
import Water from 'src/assets/Water';
import Time from 'src/assets/Time';
import { GoProject } from 'react-icons/go';
const MenuItem = ({ children, isActive }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Box
      cursor={'pointer'}
      borderRadius={6}
      p={2}
      mb={2}
      bg={isActive || isHovering ? '#3e4242' : ''}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </Box>
  );
};

export default () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Box
      w={300}
      pl={3}
      pt={3}
      position={'fixed'}
      zIndex={1000}
      height={'100%'}
      left={0}
      overflowX={'hidden'}
      overflowY={"scroll"}
    >
      <MenuItem isActive={pathname === '/'}>
        <NextLink href="/" as={`/`}>
          <Stack isInline alignItems={'center'}>
            <Box
              as={MdApps}
              fontSize={30}
              alignSelf={'center'}
              color={'cyan.500'}
              mx={1}
            />
            <Text ml={2}>All</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/tasks'}>
        <NextLink href="/records/tasks" as={`/records/tasks`}>
          <Stack isInline alignItems={'center'}>
            <Box
              as={FaTasks}
              fontSize={'2xl'}
              alignSelf={'center'}
              color={'green.500'}
              mx={2}
            />
            <Text ml={2}>Tasks</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/glucose'}>
        <NextLink href="/records/glucose" as={`/records/glucose`}>
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={5}>
              <Sugar width={30} height={30} />
            </Box>
            <Text ml={2}>Glucose</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/water'}>
        <NextLink href="/records/water" as={`/records/water`}>
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Water width={30} height={30} />
            </Box>
            <Text ml={2}>Water</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/nutrition'}>
        <NextLink href="/records/nutrition" as={`/records/nutrition`}>
          <Stack isInline alignItems={'center'}>
            <Box
              as={FaNutritionix}
              fontSize={30}
              alignSelf={'center'}
              color={'teal.500'}
              mr={2}
            />
            <Text ml={2}>Nutrition</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/records/transactions'}>
        <NextLink href="/records/transactions" as={`/records/transactions`}>
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Money width={30} height={30} />
            </Box>
            <Text ml={2}>Transactions</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <Collapse isOpen={show}>
        <MenuItem isActive={pathname === '/people'}>
          <NextLink href="/people" as={`/people`}>
            <Stack isInline alignItems={'center'}>
              <Box alignSelf={'center'} mr={5}>
                <Team width={30} height={30} />
              </Box>
              <Text ml={2}>People</Text>
            </Stack>
          </NextLink>
        </MenuItem>
        <MenuItem isActive={pathname === '/records/dishes'}>
          <NextLink href="/records/dishes" as={`/records/dishes`}>
            <Stack isInline alignItems={'center'}>
              <Box alignSelf={'center'} mr={5}>
                <Fruit width={30} height={30} />
              </Box>
              <Text ml={2}>Dishes</Text>
            </Stack>
          </NextLink>
        </MenuItem>
        <MenuItem isActive={pathname === '/records/sleep'}>
          <NextLink href="/records/sleep" as={`/records/sleep`}>
            <Stack isInline alignItems={'center'}>
              <Box alignSelf={'center'} mr={5}>
                <Sleep width={30} height={30} />
              </Box>
              <Text ml={2}>Sleep</Text>
            </Stack>
          </NextLink>
        </MenuItem>
        <MenuItem isActive={pathname === '/records/timesheet'}>
          <NextLink href="/records/timesheet" as={`/records/timesheet`}>
            <Stack isInline alignItems={'center'}>
              <Box alignSelf={'center'} mr={4}>
                <Time width={30} height={30} />
              </Box>
              <Text ml={2}>Timesheet</Text>
            </Stack>
          </NextLink>
        </MenuItem>
        <MenuItem isActive={pathname === '/records/knowledge'}>
          <NextLink href="/records/knowledge" as={`/records/knowledge`}>
            <Stack isInline alignItems={'center'}>
              <Box alignSelf={'center'} mr={4}>
                <Brain width={30} height={30} />
              </Box>
              <Text ml={2}>Knowledge</Text>
            </Stack>
          </NextLink>
        </MenuItem>
        <MenuItem isActive={pathname === '/records/heart'}>
          <NextLink href="/records/heart" as={`/records/heart`}>
            <Stack isInline alignItems={'center'}>
              <Box alignSelf={'center'} mr={4}>
                <Heart width={30} height={30} />
              </Box>
              <Text ml={2}>Heart</Text>
            </Stack>
          </NextLink>
        </MenuItem>
        <MenuItem isActive={pathname === '/records/medications'}>
          <NextLink href="/records/medications" as={`/records/medications`}>
            <Stack isInline alignItems={'center'}>
              <Box alignSelf={'center'} mr={4}>
                <Medicine width={30} height={30} />
              </Box>
              <Text ml={2}>Medications</Text>
            </Stack>
          </NextLink>
        </MenuItem>
      </Collapse>
      <Button
        rightIcon={show ? 'chevron-up' : 'chevron-down'}
        w={'100%'}
        onClick={handleToggle}
      >
        {show ? 'Show Less' : 'Show More'}
      </Button>
      <Divider borderWidth={2} my={5} />
      <MenuItem isActive={pathname === '/initiatives'}>
        <NextLink href="/initiatives" as={`/initiatives`}>
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Target width={30} height={30} />
            </Box>
            <Text ml={2}>Inititives</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <MenuItem isActive={pathname === '/projects'}>
        <NextLink href="/projects" as={`/projects`}>
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Project width={30} height={30} />
            </Box>
            <Text ml={2}>Projects</Text>
          </Stack>
        </NextLink>
      </MenuItem>
      <Divider borderWidth={2} my={5} />
      <MenuItem isActive={pathname === '/settings'}>
        <NextLink href="/settings" as={`/settings`}>
          <Stack isInline alignItems={'center'}>
            <Box alignSelf={'center'} mr={4}>
              <Settings width={30} height={30} />
            </Box>
            <Text ml={2}>Settings</Text>
          </Stack>
        </NextLink>
      </MenuItem>
    </Box>
  );
};
