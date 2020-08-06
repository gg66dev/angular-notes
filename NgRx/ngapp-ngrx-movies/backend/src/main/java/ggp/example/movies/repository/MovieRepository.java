package ggp.example.movies.repository;

import ggp.example.movies.model.Movie;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "movies", path = "movies")
public interface MovieRepository extends PagingAndSortingRepository<Movie, Long> {

    List<Movie> findByName(@Param("name") String name);
    List<Movie> findByYear(@Param("year") Integer year);
    List<Movie> findByGender_Name(@Param("name") String name);

}
