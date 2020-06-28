import { Box, Flex, Heading, Stack, useColorMode } from '@chakra-ui/core';
import useQuery from 'src/hooks/graphql/useQuery';
import { groupBy } from 'src/utils';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Card from 'src/components/core/card';
export default ({ project_id }) => {
  const { colorMode } = useColorMode();

  const [tasks] = useQuery({
    name: 'tasks',
    where: { project_id: { _eq: project_id } },
    fields: ['id', 'name', 'description', 'status'],
  });
  const groupedData = groupBy(tasks || [], (p) => p.status);
  const data = { lanes: [] };
  data.lanes.push({
    id: 'todo',
    title: 'To Do',
    label: groupedData['todo']?.count,
    cards: (groupedData['todo'] || []).map((d) => ({
      id: d.id,
      title: d.name,
      description: d.description,
    })),
  });
  data.lanes.push({
    id: 'in_progress',
    title: 'In Progress',
    label: groupedData['in_progress']?.count,
    cards: (groupedData['in_progress'] || []).map((d) => ({
      id: d.id,
      title: d.name,
      description: d.description,
    })),
  });
  data.lanes.push({
    id: 'completed',
    title: 'Completed',
    label: groupedData['completed']?.count,
    cards: (groupedData['completed'] || []).map((d) => ({
      id: d.id,
      title: d.name,
      description: d.description,
    })),
  });
  const onDragEnd = (result) => {};
  return (
    <Box>
      {tasks && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Flex>
            {data.lanes.map((lane) => (
              <Box flex={1} key={lane.id}>
                <Stack>
                  <Heading size={'md'}>{lane.title}</Heading>
                  <Droppable droppableId={lane.id}>
                    {(provided) => (
                      <Box
                        {...provided.droppableProps}
                        innerRef={provided.innerRef}
                        ref={provided.innerRef}
                      >
                        {lane.cards.map((card, index) => (
                          <Draggable
                            key={card.id}
                            draggableId={card.id}
                            index={index}
                          >
                            {(dragProvided) => {
                              return (
                                <Card
                                  p={5}
                                  ref={provided.innerRef}
                                  innerRef={dragProvided.innerRef}
                                  {...dragProvided.draggableProps}
                                  {...dragProvided.dragHandleProps}
                                >
                                  {card.title}
                                </Card>
                              );
                            }}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </Box>
                    )}
                  </Droppable>
                </Stack>
              </Box>
            ))}
          </Flex>
        </DragDropContext>
      )}
    </Box>
  );
};
